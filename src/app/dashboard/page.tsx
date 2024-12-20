import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import PersonalizedLearningPath from '@/components/PersonalizedLearningPath'
import RealTimeAnalytics from '@/components/RealTimeAnalytics'
import AdaptiveAssessment from '@/components/AdaptiveAssessment'
import ContentRecommendation from '@/components/ContentRecommendation'
import StudentProgress from '@/components/StudentProgress'
import LiveSupport from '@/components/LiveSupport'

export default async function Dashboard() {
  const session = await getServerSession()
  
  if (!session) {
    redirect("/login")
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard del Estudiante</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PersonalizedLearningPath />
        <RealTimeAnalytics />
        <AdaptiveAssessment />
        <ContentRecommendation />
        <StudentProgress />
        <LiveSupport />
      </div>
    </div>
  )
}