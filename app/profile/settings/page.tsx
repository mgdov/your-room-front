"use client"

import { useState } from "react"

import {
  PageLayout,
  ProfileTabs,
  type ProfileTabKey,
  ProfileSettingsContent,
  type ProfileSettingsData,
  type ProfileStats,
  ProfileBalanceContent,
  ProfileReferralContent,
} from "@/components/shared"

const initialProfile: ProfileSettingsData = {
  username: "",
  email: "",
  apiToken: "",
  referralLink: "",
}

const baseStats: ProfileStats = {
  totalOrders: null,
  totalSpent: null,
  invited: null,
  monthEarned: null,
  totalEarned: null,
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<ProfileTabKey>("settings")

  return (
    <PageLayout>
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold">Профиль</h1>

        <ProfileTabs activeTab={activeTab} onChange={setActiveTab} />

        {activeTab === "settings" && (
          <ProfileSettingsContent initialProfile={initialProfile} stats={baseStats} />
        )}

        {activeTab === "balance" && <ProfileBalanceContent />}

        {activeTab === "referral" && (
          <ProfileReferralContent initialProfile={{ referralLink: initialProfile.referralLink }} stats={baseStats} />
        )}
      </div>
    </PageLayout>
  )
}
