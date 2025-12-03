import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { SignOutButton } from '@/components/sign-out-button'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/signin')
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { subscription: true },
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary-600">YourSaaS</div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{user?.email}</span>
            <SignOutButton />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600">Here's what's happening with your account.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-gray-600 mb-1">Current Plan</div>
            <div className="text-2xl font-bold text-primary-600">
              {user?.subscription?.plan || 'FREE'}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-gray-600 mb-1">Status</div>
            <div className="text-2xl font-bold text-green-600">
              {user?.subscription?.status || 'ACTIVE'}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-gray-600 mb-1">Member Since</div>
            <div className="text-2xl font-bold text-gray-900">
              {new Date(user?.createdAt || '').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/dashboard/settings"
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="font-semibold mb-1">⚙️ Account Settings</div>
              <div className="text-sm text-gray-600">Manage your profile and preferences</div>
            </Link>
            <Link
              href="/dashboard/billing"
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="font-semibold mb-1">💳 Billing</div>
              <div className="text-sm text-gray-600">View and manage your subscription</div>
            </Link>
            <Link
              href="/dashboard/api"
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="font-semibold mb-1">🔑 API Keys</div>
              <div className="text-sm text-gray-600">Manage your API access tokens</div>
            </Link>
            <Link
              href="/docs"
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="font-semibold mb-1">📚 Documentation</div>
              <div className="text-sm text-gray-600">Learn how to use the platform</div>
            </Link>
          </div>
        </div>

        {/* Upgrade CTA */}
        {user?.subscription?.plan === 'FREE' && (
          <div className="mt-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg shadow p-8 text-white">
            <h2 className="text-2xl font-bold mb-2">Upgrade to Pro</h2>
            <p className="mb-4">Get access to advanced features and priority support</p>
            <Link
              href="/pricing"
              className="inline-block bg-white text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100"
            >
              View Plans
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
