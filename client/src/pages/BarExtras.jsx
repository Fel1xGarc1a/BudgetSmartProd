// this is for the extra pages like faq and about us
import { ToggleBox } from "../components/ToggleBox";

export function FAQ() {
    const toggleContent = [
        { question: "How much does it cost?", answer: "Our services are completely free and we plan to keep it that way so there's no excuse to budget the right way" },
        { question: "How many budget plans can I create?", answer: "Our application allows you to create an unlimited amount of budget plans for free. So don't worry just budget away." },
        { question: "How do I start?", answer: "The process is simple, go to our home page, click get started, and provide valid information to create your new account" },
        { question: "Can I share my budget plans with others?", answer: "Yes! Our group budgeting feature allows you to create and share budget plans with friends and family. Perfect for planning trips, events, or shared expenses." },
        { question: "Is my financial information secure?", answer: "We take security seriously. All your financial data is encrypted and stored securely. We never share your personal information with third parties." },
        { question: "What makes BudgetSmart different from other budgeting apps?", answer: "BudgetSmart combines personal budgeting with social features, making it unique. Our platform includes group planning, a motivational leaderboard, and educational resources all in one place." },
        { question: "Can I access BudgetSmart on mobile devices?", answer: "Yes! Our website is fully responsive and works seamlessly on all devices - desktop, tablet, and mobile phones." }
    ];

    return (
        <>
            <div className="min-h-screen bg-gray-50 pt-20 pb-12 font-Outfit">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold mb-4 text-gray-800">
                            Frequently Asked <span className="text-orange-500">Questions</span>
                        </h1>
                        <p className="text-xl text-gray-600">
                            Have questions? We're here to help!
                        </p>
                    </div>

                    <div className="space-y-4">
                        {toggleContent.map((element, index) => (
                            <ToggleBox 
                                key={index}
                                question={element.question} 
                                content={element.answer}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export function AboutUs() {
    return (
        <>
            <div className="h-screen w-screen flex flex-row font-Outfit">
                <div className="flex flex-col justify-center items-center h-screen w-2/5 bg-blue-200">
                    <span className="text-6xl font-bold"><h1>About</h1></span>
                    <span className="text-6xl font-bold"><h1>Us</h1></span>
                    <img src="/aboutUs.png" alt="About Us" />
                </div>

                <div className="flex flex-col justify-center items-center h-screen w-3/5 p-20">
                    <span className="text-2xl"><p>We are BudgetSmart, an application dedicated to making the lives of our users simple by introducing budgeting features. With our application, users can create a plethora of bugeting plans (both personal and as a group). We also consider our traveling users, we still want to maintain their bugeting regardless of their locations. If you want to start bugeting, let us help you do bugeting the right way.</p></span>
                    
                </div>

            </div>

        </>
    );
}