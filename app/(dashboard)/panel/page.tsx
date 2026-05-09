import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getDailyEnergy } from "@/lib/gemini-data";
import GreetingHeader from "@/components/mystical/GreetingHeader";
import DailyEnergyCard from "@/components/mystical/DailyEnergyCard";
import ServiceCards from "@/components/mystical/ServiceCards";
import RecentReadings from "@/components/mystical/RecentReadings";
import TrialBanner from "@/components/mystical/TrialBanner";

export default async function PanelPage() {
  const session = await auth();
  const userId = session?.user?.id;

  const [recentReadingsRaw, subscription] = await Promise.all([
    userId
      ? prisma.reading.findMany({
          where: { userId },
          orderBy: { createdAt: "desc" },
          take: 3,
          select: { id: true, type: true, input: true, result: true, createdAt: true },
        })
      : [],
    userId
      ? prisma.subscription.findUnique({
          where: { userId },
          select: { status: true, trialEnd: true },
        })
      : null,
  ]);

  const readings = recentReadingsRaw.map((r) => ({
    ...r,
    createdAt: r.createdAt.toISOString(),
  }));

  const trialDaysLeft = subscription?.trialEnd
    ? Math.max(0, Math.ceil((new Date(subscription.trialEnd).getTime() - Date.now()) / 86400000))
    : 0;

  const dailyEnergy = getDailyEnergy();
  const userName = session?.user?.name ?? "Ruhlar";

  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <GreetingHeader name={userName} />

      {subscription?.status === "trialing" && trialDaysLeft > 0 && (
        <div style={{ marginTop: 28 }}>
          <TrialBanner trialDaysLeft={trialDaysLeft} />
        </div>
      )}

      <DailyEnergyCard energy={dailyEnergy} />

      <div style={{ margin: "40px 0 16px", fontSize: 11, color: "#444", letterSpacing: 3, textTransform: "uppercase" }}>
        ✦ Mistik Xidmətlər
      </div>
      <ServiceCards />

      {readings.length > 0 && (
        <>
          <div style={{ margin: "40px 0 16px", fontSize: 11, color: "#444", letterSpacing: 3, textTransform: "uppercase" }}>
            ✦ Son Oxumalar
          </div>
          <RecentReadings readings={readings} />
        </>
      )}

      <div style={{ height: 40 }} />
    </div>
  );
}
