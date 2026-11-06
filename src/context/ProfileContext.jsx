import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ProfileContext = createContext(null)
const STORAGE_KEY = 'pieriot-profile'

const defaultProfile = {
  fullName: '',
  email: '',
  phone: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
  deliveryNotes: '',
}

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? { ...defaultProfile, ...JSON.parse(saved) } : defaultProfile
    } catch {
      return defaultProfile
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
  }, [profile])

  const updateProfile = (patch) => {
    setProfile((prev) => ({ ...prev, ...patch }))
  }

  const hasShippingAddress = Boolean(
    profile.fullName &&
      profile.address1 &&
      profile.city &&
      profile.state &&
      profile.zip,
  )

  const value = useMemo(
    () => ({ profile, updateProfile, hasShippingAddress }),
    [profile, hasShippingAddress],
  )

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  )
}

export function useProfile() {
  const ctx = useContext(ProfileContext)
  if (!ctx) throw new Error('useProfile must be used within ProfileProvider')
  return ctx
}
