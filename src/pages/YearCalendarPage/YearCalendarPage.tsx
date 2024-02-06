import React from "react";
import { memo } from 'react';
import { PageLayout } from "../../components/PageLayout/PageLayout";
import YearCalendar from "../../components/YearCalendar/YearCalendar";

const YearCalendarPage: React.FC = memo(() => {

    return (
        <PageLayout>
            <b>Calendar Page</b>
            <YearCalendar />
        </PageLayout>


    )
});

export default YearCalendarPage;