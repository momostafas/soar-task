import React from 'react';
import Card from '../components/Card';
import WeeklyActivity from '../components/WeeklyActivity';
import RecentTransactions from '../components/RecentTransactions';
import ExpenseStatistics from '../components/ExpenseStatistics';
import BalanceHistory from '../components/BalanceHistory';

const Dashboard = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
                <Card theme="dark" />
                <Card theme="light" />
                <RecentTransactions />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
                <WeeklyActivity className="sm:col-span-2 lg:col-span-2" />  
                <ExpenseStatistics className="sm:col-span-1 lg:col-span-1" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <ExpenseStatistics className="sm:col-span-1 lg:col-span-1" />
                <BalanceHistory className="sm:col-span-2 lg:col-span-2" />
            </div>
        </div>
    );
};

export default Dashboard;
