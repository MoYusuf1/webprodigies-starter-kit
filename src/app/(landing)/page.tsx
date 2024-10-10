import Image from "next/image"
import CallToAction from "./_components/call-to-action"
import DashboardSnippet from "./_components/dashboard-snippet"
import dynamic from "next/dynamic"
import PricingSection from "./_components/pricing"

export default function Home() {
    return (
        <main className="md:px-10 py-20 flex-col gap-36">
            <div>
                <CallToAction/>
                <DashboardSnippet />
                <PricingSection/>
            </div>
        </main>
    )
}
