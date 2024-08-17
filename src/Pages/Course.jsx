import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const coursesData = [
    {
        category: "Art & Design",
        courses: [
            {
                id: 1,
                title: "Introduction to Graphic Design",
                description: "Learn the basics of graphic design.",
                instructor: "Alice Johnson",
                duration: "5 hours",
                thumbnail: "https://images.unsplash.com/photo-1626654386409-180d8880fca5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDI%3D",
            },
            {
                id: 2,
                title: "Advanced Illustration Techniques",
                description: "Take your illustration skills to the next level.",
                instructor: "Brian Thompson",
                duration: "8 hours",
                thumbnail: "https://media.istockphoto.com/id/1764608153/photo/photo-editor-user-interface-on-tablet-computer.webp?b=1&s=612x612&w=0&k=20&c=UtU5Fs4CU6jJCPbsPvL6XxCVm8gqska7OgFkkjx-z9I=",
            }
        ]
    },
    {
        category: "Development",
        courses: [
            {
                id: 3,
                title: "Web Development Bootcamp",
                description: "Become a full-stack web developer.",
                instructor: "John Doe",
                duration: "10 hours",
                thumbnail: "https://images.unsplash.com/photo-1585384107568-5bc588c7eefd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHwy",
            },
            {
                id: 4,
                title: "React Native for Beginners",
                description: "Learn to build mobile apps with React Native.",
                instructor: "Sarah Lee",
                duration: "6 hours",
                thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhY3Rqc3xlbnwwfHwwfHx8Mg%3D%3D",
            }
        ]
    },
    {
        category: "Lifestyle",
        courses: [
            {
                id: 5,
                title: "Healthy Living Essentials",
                description: "Learn how to maintain a healthy lifestyle.",
                instructor: "Emily White",
                duration: "4 hours",
                thumbnail: "https://images.unsplash.com/photo-1478144592103-25e218a04891?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoeSUyMGxpZmVzdHlsZXxlbnwwfHwwfHx8Mg%3D%3D",
            },
            {
                id: 6,
                title: "Minimalist Living",
                description: "Simplify your life with minimalist principles.",
                instructor: "Frank Green",
                duration: "3 hours",
                thumbnail: "https://images.unsplash.com/photo-1529651737248-dad5e287768e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1pbmltYWxpc3R8ZW58MHx8MHx8fDI%3D",
            }
        ]
    },
    {
        category: "Personal Development",
        courses: [
            {
                id: 7,
                title: "Time Management Mastery",
                description: "Maximize your productivity and efficiency.",
                instructor: "David Green",
                duration: "3.5 hours",
                thumbnail: "https://images.unsplash.com/photo-1699796796159-a97661cc3f86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRpbWUlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHwy",
            },
            {
                id: 8,
                title: "Emotional Intelligence at Work",
                description: "Improve your interpersonal skills and emotional awareness.",
                instructor: "Laura White",
                duration: "5 hours",
                thumbnail: "https://images.unsplash.com/photo-1515191107209-c28698631303?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vc3QlMjBjb25maWRlbmNlfGVufDB8fDB8fHwy",
            }
        ]
    },
    {
        category: "Business",
        courses: [
            {
                id: 9,
                title: "Entrepreneurship 101",
                description: "Learn how to start and run a successful business.",
                instructor: "Michael Scott",
                duration: "7 hours",
                thumbnail: "https://media.istockphoto.com/id/1363104923/photo/diverse-modern-office-businessman-leads-business-meeting-with-managers-talks-uses.webp?b=1&s=612x612&w=0&k=20&c=nUP8L_vHkX8A6h9VQvhtapKqRfyS9k7AhZzOR_mmRhE=",
            },
            {
                id: 10,
                title: "Digital Marketing Strategies",
                description: "Master the art of digital marketing.",
                instructor: "Angela Martin",
                duration: "6 hours",
                thumbnail: "https://images.unsplash.com/photo-1664575601786-b00156752b61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZW50cmVwcmVuZXVyfGVufDB8fDB8fHwy",
            }
        ]
    },
    {
        category: "Finance",
        courses: [
            {
                id: 11,
                title: "Personal Finance Management",
                description: "Take control of your finances and plan for the future.",
                instructor: "Robert Gray",
                duration: "4 hours",
                thumbnail: "https://images.unsplash.com/photo-1534951009808-766178b47a4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UGVyc29uYWwlMjBGaW5hbmNlJTIwTWFuYWdlbWVudHxlbnwwfHwwfHx8Mg%3D%3D",
            },
            {
                id: 12,
               title: "Stock Market Investing",
                description: "Learn how to invest in the stock market like a pro.",
                instructor: "Warren Buffett",
                duration: "8 hours",
                thumbnail: "https://images.unsplash.com/photo-1638481826540-7710b13f7d53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEludmVzdGluZyUyMGZvciUyMEJlZ2lubmVyc3xlbnwwfHwwfHx8Mg%3D%3D",
            }
        ]
    },
    {
        category: "Marketing",
        courses: [
            {
                id: 13,
                title: "Social Media Marketing",
                description: "Leverage social media to grow your brand.",
                instructor: "Pam Beesly",
                duration: "5 hours",
                thumbnail: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0aW5nfGVufDB8fDB8fHwy",
            },
            {
                id: 14,
                title: "Content Marketing Mastery",
                description: "Learn how to create and distribute valuable content.",
                instructor: "Ryan Howard",
                duration: "4 hours",
                thumbnail: "https://images.unsplash.com/photo-1603145733146-ae562a55031e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fHwy",
            }
        ]
    },
    {
        category: "Photography",
        courses: [
            {
                id: 15,
                title: "Portrait Photography",
                description: "Capture stunning portrait photos.",
                instructor: "Dwight Schrute",
                duration: "3.5 hours",
                thumbnail: "https://images.unsplash.com/photo-1486916856992-e4db22c8df33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFBob3RvZ3JhcGh5JTIwQmFzaWNzfGVufDB8fDB8fHwy",
            },
            {
                id: 16,
                title: "Advanced Portrait Photography",
                description: "Master portrait photography techniques.",
                instructor: "Paul Taylor",
                duration: "6 hours",
                thumbnail: "https://images.unsplash.com/photo-1462804993656-fac4ff489837?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxBZHZhbmNlZCUyMFBvcnRyYWl0JTIwUGhvdG9ncmFwaHl8ZW58MHx8MHx8fDI%3D",
            }
        ]
    },
    {
        category: "Data Science",
        courses: [
            {
                id: 17,
                title: "Introduction to Data Science",
                description: "Start your journey in data science.",
                instructor: "Stanley Hudson",
                duration: "6 hours",
                thumbnail: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGF0YSUyMFNjaWVuY2V8ZW58MHx8MHx8fDI%3D",
            },
            {
                id: 18,
                title: "Advanced Machine Learning",
                description: "Master advanced machine learning techniques.",
                instructor: "Kevin Malone",
                duration: "8 hours",
                thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGF0YSUyMEFuYWx5c2lzJTIwd2l0aCUyMFB5dGhvbnxlbnwwfHwwfHx8Mg%3D%3D",
            }
        ]
    },
    {
        category: "Health & Fitness",
        courses: [
            {
                id: 19,
                title: "Yoga for Beginners",
                description: "Start your yoga journey with this beginner-friendly course.",
                instructor: "Phyllis Vance",
                duration: "4 hours",
                thumbnail: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fFlvZ2ElMjBmb3IlMjBCZWdpbm5lcnN8ZW58MHx8MHx8fDI%3D",
            },
            {
                id: 20,
                title: "Fitness for Busy People",
                description: "Learn how to stay fit with a busy schedule.",
                instructor: "Angela Martin",
                duration: "3 hours",
                thumbnail: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE51dHJpdGlvbiUyMEJhc2ljc3xlbnwwfHwwfHx8Mg%3D%3D",
            }
        ]
    },
    {
        category: "Music",
        courses: [
            {
                id: 21,
                title: "Guitar for Beginners",
                description: "Learn how to play the guitar.",
                instructor: "Ursula Smith",
                duration: "6 hours",
                thumbnail: "https://images.unsplash.com/photo-1593697972646-2f348871bd56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8R3VpdGFyJTIwZm9yJTIwQmVnaW5uZXJzfGVufDB8fDB8fHwy",
            },
            {
                id: 22,
                title: "Music Theory Basics",
                description: "Understand the fundamentals of music theory.",
                instructor: "Victor Johnson",
                duration: "5 hours",
                thumbnail: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TXVzaWMlMjBUaGVvcnklMjBCYXNpY3N8ZW58MHx8MHx8fDI%3D",
            }
        ]
    },
    {
        category: "Teaching & Academics",
        courses: [
            {
                id: 23,
                title: "Effective Teaching Strategies",
                description: "Learn strategies for effective teaching.",
                instructor: "Wendy Brown",
                duration: "6 hours",
                thumbnail: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEVmZmVjdGl2ZSUyMFRlYWNoaW5nJTIwU3RyYXRlZ2llc3xlbnwwfHwwfHx8Mg%3D%3D",
            },
            {
                id: 24,
                title: "Educational Psychology",
                description: "Understand the principles of educational psychology.",
                instructor: "Xander Lewis",
                duration: "7 hours",
                thumbnail: "https://images.unsplash.com/photo-1609660100545-05f3799a941b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEVkdWNhdGlvbmFsJTIwUHN5Y2hvbG9neXxlbnwwfHwwfHx8Mg%3D%3D",
            }
        ]
    },
];
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function Course() {
    const shuffledCourses = shuffleArray(coursesData.flatMap(categoryData => categoryData.courses));

    return (
        <div>
            <Navbar />
            <div className="courses-page">
                <h1>Top Courses</h1>
                <div className="courses-grid">
                    {shuffledCourses.map(course => (
                        <div className="course-card" key={course.id}>
                            <img src={course.thumbnail} alt={course.title} className="course-thumbnail" />
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <p><strong>Instructor:</strong> {course.instructor}</p>
                            <p><strong>Duration:</strong> {course.duration}</p>
                            <Link to={`/course/${course.id}`}>
                                <button>View More</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Course;
