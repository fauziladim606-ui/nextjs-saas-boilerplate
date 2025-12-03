import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary-600">YourSaaS</div>
          <div className="space-x-4">
            <Link href="/auth/signin" className="text-gray-600 hover:text-gray-900">
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          Build Your SaaS Product
          <br />
          <span className="text-primary-600">10x Faster</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Production-ready Next.js 16 boilerplate with authentication, payments, database, 
          and everything you need to launch your SaaS.
        </p>
        <div className="space-x-4">
          <Link
            href="/auth/signup"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700"
          >
            Start Building
          </Link>
          <Link
            href="#features"
            className="inline-block border border-gray-300 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, i) => (
              <div key={i} className={`p-8 rounded-lg ${plan.featured ? 'bg-primary-600 text-white' : 'bg-white'}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-4">
                  ${plan.price}<span className="text-lg">/mo</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j}>✓ {f}</li>
                  ))}
                </ul>
                <button className={`w-full py-2 rounded-lg font-semibold ${
                  plan.featured ? 'bg-white text-primary-600' : 'bg-primary-600 text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 YourSaaS. Built with Next.js and PostgreSQL.</p>
        </div>
      </footer>
    </div>
  )
}

const features = [
  { icon: '🔐', title: 'Authentication', description: 'NextAuth.js with email/password and OAuth support' },
  { icon: '💳', title: 'Payments', description: 'Stripe integration with subscription management' },
  { icon: '🗄️', title: 'Database', description: 'PostgreSQL with Prisma ORM' },
  { icon: '🎨', title: 'UI Components', description: 'Tailwind CSS with responsive design' },
  { icon: '🐳', title: 'Docker Ready', description: 'Docker Compose for development and production' },
  { icon: '⚡', title: 'API Routes', description: 'RESTful API with type-safe endpoints' },
]

const pricing = [
  { name: 'Free', price: 0, features: ['1 User', 'Basic Features', 'Community Support'], featured: false },
  { name: 'Pro', price: 29, features: ['5 Users', 'Advanced Features', 'Priority Support', 'API Access'], featured: true },
  { name: 'Enterprise', price: 99, features: ['Unlimited Users', 'All Features', '24/7 Support', 'Custom Integration'], featured: false },
]
