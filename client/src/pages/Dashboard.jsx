// user dashboard, the first thing a user will see upon a successful login

// example of sessionStorage down below. using sessionStorage.getItem(whatever name) you can obtain values to reuse. when you refresh the page
// the data will persist. you can use the stored user_id for future queries now.

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Dashboard() {
    const location = useLocation();
    const navigate = useNavigate();
    
    // Sample budget data
    const budgetOverview = {
        totalBudget: 3000,
        spent: 1800,
        remaining: 1200,
        savingsGoal: 500,
        savedAmount: 350,
        recentTransactions: [
            { id: 1, description: "Grocery Shopping", amount: -120, date: "2024-03-15" },
            { id: 2, description: "Salary Deposit", amount: 2500, date: "2024-03-14" },
            { id: 3, description: "Netflix Subscription", amount: -15, date: "2024-03-13" },
        ]
    };

    const dashboardItems = [
        { name: "My Budgets", url: "/mybudgets", bgColor: "bg-blue-400", icon: "💰" },
        { name: "Friends", url: "/addfriends", bgColor: "bg-green-400", icon: "👥" },
        { name: "Leaderboard", url: "/leader", bgColor: "bg-yellow-400", icon: "🏆" },
        { name: "Currency", url: "/currency", bgColor: "bg-purple-400", icon: "💱" },
        { name: "Articles", url: "/articles", bgColor: "bg-red-400", icon: "📚" },
        { name: "Profile", url: "/profile", bgColor: "bg-orange-400", icon: "👤" }
    ];

    // Calculate percentages for progress bars
    const spentPercentage = (budgetOverview.spent / budgetOverview.totalBudget) * 100;
    const savingsPercentage = (budgetOverview.savedAmount / budgetOverview.savingsGoal) * 100;

    return (
        <div className="min-h-screen bg-gray-100 pt-20 font-Outfit">
            <div className="container mx-auto px-4">
                {/* Welcome Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        Welcome, {sessionStorage.getItem("user_name")}!
                    </h1>
                    <p className="text-gray-600">Here's your financial overview</p>
                </div>

                {/* Budget at a Glance Section */}
                <div className="max-w-6xl mx-auto mb-12">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Budget at a Glance</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {/* Monthly Budget Progress */}
                            <div className="bg-blue-50 rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-blue-800 mb-2">Monthly Budget</h3>
                                <div className="mb-2">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Spent: ${budgetOverview.spent}</span>
                                        <span>Total: ${budgetOverview.totalBudget}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div 
                                            className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                                            style={{ width: `${spentPercentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <p className="text-blue-600 font-semibold">
                                    ${budgetOverview.remaining} remaining
                                </p>
                            </div>

                            {/* Savings Goal */}
                            <div className="bg-green-50 rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-green-800 mb-2">Savings Goal</h3>
                                <div className="mb-2">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Saved: ${budgetOverview.savedAmount}</span>
                                        <span>Goal: ${budgetOverview.savingsGoal}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div 
                                            className="bg-green-600 h-2.5 rounded-full transition-all duration-500"
                                            style={{ width: `${savingsPercentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <p className="text-green-600 font-semibold">
                                    ${budgetOverview.savingsGoal - budgetOverview.savedAmount} to go
                                </p>
                            </div>

                            {/* Recent Transactions */}
                            <div className="bg-purple-50 rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-purple-800 mb-2">Recent Transactions</h3>
                                <div className="space-y-2">
                                    {budgetOverview.recentTransactions.map(transaction => (
                                        <div key={transaction.id} className="flex justify-between items-center">
                                            <span className="text-sm truncate">{transaction.description}</span>
                                            <span className={`text-sm font-semibold ${
                                                transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                                            }`}>
                                                ${Math.abs(transaction.amount)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions Title */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">Quick Actions</h2>
                </div>

                {/* Navigation Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {dashboardItems.map((item) => (
                        <div
                            key={item.name}
                            onClick={() => navigate(item.url)}
                            className={`${item.bgColor} hover:opacity-90 transition-all duration-200 
                                      rounded-lg shadow-lg p-6 cursor-pointer transform hover:scale-105`}
                        >
                            <div className="flex flex-col items-center text-white">
                                <span className="text-4xl mb-4">{item.icon}</span>
                                <h2 className="text-2xl font-semibold">{item.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}