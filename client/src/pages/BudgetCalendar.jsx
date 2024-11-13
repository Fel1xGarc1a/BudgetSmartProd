import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { supabase } from '../config/supabase';
import 'react-calendar/dist/Calendar.css';

const BudgetCalendar = () => {
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    
    useEffect(() => {
        fetchBudgetPlans();
    }, []);

    const fetchBudgetPlans = async () => {
        try {
            const userId = sessionStorage.getItem("user_id");
            const { data, error } = await supabase
                .from('budget_plan')
                .select('*')
                .eq('user_id', userId);

            if (error) throw error;

            console.log("Fetched budget plans:", data);
            
            // Convert start_date and end_date to Date objects
            const formattedData = data.map(event => ({
                ...event,
                start_date: new Date(event.start_date),
                end_date: new Date(event.end_date)
            }));
            
            setEvents(formattedData);
        } catch (error) {
            console.error("Error fetching budget plans:", error.message);
        }
    };

    // Filter budget plans for the selected date
    const eventsForSelectedDate = events.filter(event => {
        const eventStartDate = new Date(event.start_date);
        const eventEndDate = new Date(event.end_date);
        const selectedDate = new Date(date);
        
        // Normalize dates to the start of the day
        const normalizedSelectedDate = new Date(selectedDate.setHours(0, 0, 0, 0));
        const normalizedEventStartDate = new Date(eventStartDate.setHours(0, 0, 0, 0));
        const normalizedEventEndDate = new Date(eventEndDate.setHours(23, 59, 59, 999));
    
        // Check if normalizedSelectedDate is within the range
        return normalizedSelectedDate >= normalizedEventStartDate && normalizedSelectedDate <= normalizedEventEndDate;
    });

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-8">
            <h1 className="text-2xl font-semibold text-center text-blue-600 mb-4">Budget Calendar</h1>

            <Calendar 
                onChange={setDate} 
                value={date} 
                className="mb-6 border rounded-lg p-4" 
            />

            <h2 className="text-lg font-semibold text-gray-700 mb-2">Events on {date.toDateString()}</h2>
            <ul className="mb-4">
                {eventsForSelectedDate.length > 0 ? (
                    eventsForSelectedDate.map(event => (
                        <li key={event.budget_id} className="bg-blue-100 text-blue-700 p-2 rounded mb-2 shadow-sm">
                            <p><strong>Budget Name:</strong> {event.budget_name}</p>
                            <p><strong>Total Budget:</strong> ${event.total_budget}</p>
                            <p><strong>Start Date:</strong> {new Date(event.start_date).toLocaleDateString()}</p>
                            <p><strong>End Date:</strong> {new Date(event.end_date).toLocaleDateString()}</p>
                        </li>
                    ))
                ) : (
                    <p className="text-gray-500">No events for this date.</p>
                )}
            </ul>
        </div>
    );
};

export default BudgetCalendar;






