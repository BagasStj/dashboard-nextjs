// import { NextResponse } from 'next/server';
// import prisma from '@/lib/prisma';
// import bcrypt from 'bcryptjs';

// export async function POST(request: Request) {
//   try {
//     const { email, password } = await request.json();

//     const user = await prisma.user.findUnique({
//       where: {
//         email,
//       },
//     });

//     if (!user) {
//       return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
//     }

//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (!passwordMatch) {
//       return NextResponse.json({ success: false, error: 'Incorrect password' }, { status: 401 });
//     }

//     return NextResponse.json({ success: true, message: 'Login successful' }, { status: 200 });
//   } catch (error) {
//     console.error('Login error:', error);
//     if (error instanceof Error) {
//       return NextResponse.json({ success: false, error: 'Login failed', details: error.message }, { status: 500 });
//     } else {
//       return NextResponse.json({ success: false, error: 'Login failed', details: 'An unknown error occurred' }, { status: 500 });
//     }
//   }
// }