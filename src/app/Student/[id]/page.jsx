import Student_details from '@/Components/Student_details';
import React, { Suspense } from 'react';

const DetailsPage = async ({ params }) => {

    const { id } = await params;
    const data = await fetch(`http://localhost:5000/get_student/${id}`);
    const student = await data.json();

    return (
        <div>

            <Student_details student={student}></Student_details>
        </div>
    );
};


const getStudentDetails = async ({ params }) => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DetailsPage params={params} />
        </Suspense>

    );
};

export default getStudentDetails;