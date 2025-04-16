import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        // Parse the request body
        const body = await request.json();
        
        // Do something with the data (e.g. save to database)
        console.log('Received data:', body);
        
        // Return success response
        return NextResponse.json(
            { message: 'Data added successfully', data: body },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error processing request:', error);
        
        // Return error response
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 400 }
        );
    }
}