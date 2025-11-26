"use client"

import { useCallback, useState } from "react"

import { ProfileApiCard } from "./profile-api-card"
import { ProfileEmailCard } from "./profile-email-card"
import { ProfileLoginCard } from "./profile-login-card"
import { ProfileSidebar } from "./profile-sidebar"

export interface ProfileSettingsData {
    username: string
    email: string
    apiToken: string
    referralLink: string
}

export interface ProfileStats {
    totalOrders: number | null
    totalSpent: number | null
    invited: number | null
    monthEarned: number | null
    totalEarned: number | null
}

interface ProfileSettingsContentProps {
    initialProfile?: ProfileSettingsData
    stats: ProfileStats
}

const emptyProfile: ProfileSettingsData = {
    username: "",
    email: "",
    apiToken: "",
    referralLink: "",
}

export function ProfileSettingsContent({ initialProfile, stats }: ProfileSettingsContentProps) {
    const [profileSettings, setProfileSettings] = useState<ProfileSettingsData>(initialProfile ?? emptyProfile)

    const handleCopy = useCallback((value: string) => {
        if (!value) return

        if (typeof navigator !== "undefined" && navigator.clipboard) {
            navigator.clipboard.writeText(value).catch(() => null)
        }
    }, [])

    const handleEmailChange = useCallback((value: string) => {
        setProfileSettings((prev) => ({ ...prev, email: value }))
    }, [])

    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
                <ProfileLoginCard username={profileSettings.username} onCopyUsername={handleCopy} />
                <ProfileEmailCard email={profileSettings.email} onChangeEmail={handleEmailChange} />
                <ProfileApiCard apiToken={profileSettings.apiToken} onCopyToken={handleCopy} />
            </div>

            <ProfileSidebar stats={stats} />
        </div>
    )
}
