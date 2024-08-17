import React, { useState } from 'react';
import './BuyNow.css';
import { useParams} from 'react-router-dom';

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
                overview: `In this course, you will learn the basics of graphic design, including the principles of design, color theory, typography, and more. You'll get hands-on experience using popular design tools like Adobe Photoshop and Illustrator to create your own projects.`,
                prerequisites: "None",
                learn: [
                    "Understand the basics of graphic design",
                    "Learn to use design tools like Adobe Photoshop and Illustrator",
                    "Create professional-level design projects"
                ],
                includes: {
                    video: "2.5 hours on-demand video",
                    resources: "1 downloadable resource",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Introduction",
                        lectures: [
                            { title: "What is Graphic Design?", duration: "15 min" },
                            { title: "History of Graphic Design", duration: "20 min" }
                        ]
                    },
                    {
                        sectionTitle: "Section 1: Design Basics",
                        lectures: [
                            { title: "Principles of Design", duration: "30 min" },
                            { title: "Color Theory", duration: "40 min" }
                        ]
                    },
                    {
                        sectionTitle: "Section 2: Tools & Techniques",
                        lectures: [
                            { title: "Using Adobe Photoshop", duration: "1 hour" },
                            { title: "Introduction to Illustrator", duration: "45 min" }
                        ]
                    }
                ],
                price: "Rs.499"
            },
            {
                id: 2,
                title: "Advanced Illustration Techniques",
                description: "Take your illustration skills to the next level.",
                instructor: "Brian Thompson",
                duration: "8 hours",
                thumbnail: "https://media.istockphoto.com/id/1764608153/photo/photo-editor-user-interface-on-tablet-computer.webp?b=1&s=612x612&w=0&k=20&c=UtU5Fs4CU6jJCPbsPvL6XxCVm8gqska7OgFkkjx-z9I=",
                overview: `This course is designed for those who have a basic understanding of illustration and want to improve their skills. You'll learn advanced techniques for digital and traditional illustration, including shading, perspective, and color blending.`,
                prerequisites: "Basic knowledge of illustration",
                learn: [
                    "Master advanced illustration techniques",
                    "Improve your shading and perspective skills",
                    "Create detailed and realistic illustrations"
                ],
                includes: {
                    video: "8 hours on-demand video",
                    resources: "3 downloadable resources",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Advanced Techniques",
                        lectures: [
                            { title: "Shading and Lighting", duration: "1 hour" },
                            { title: "Perspective in Illustration", duration: "1.5 hours" }
                        ]
                    },
                    {
                        sectionTitle: "Digital Illustration",
                        lectures: [
                            { title: "Working with Layers", duration: "45 min" },
                            { title: "Color Blending Techniques", duration: "1 hour" }
                        ]
                    }
                ],
                price: "Rs.499"
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
                overview: `This comprehensive bootcamp will teach you everything you need to know to become a full-stack web developer. You'll start with HTML, CSS, and JavaScript, and move on to React, Node.js, and databases.`,
                prerequisites: "Basic computer skills",
                learn: [
                    "Build modern web applications using HTML, CSS, and JavaScript",
                    "Understand how to use frameworks like React",
                    "Work with back-end technologies like Node.js and databases"
                ],
                includes: {
                    video: "10 hours on-demand video",
                    resources: "5 downloadable resources",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Introduction to Web Development",
                        lectures: [
                            { title: "Setting Up Your Development Environment", duration: "20 min" },
                            { title: "HTML Basics", duration: "30 min" }
                        ]
                    },
                    {
                        sectionTitle: "Frontend Development",
                        lectures: [
                            { title: "CSS Styling", duration: "45 min" },
                            { title: "JavaScript Essentials", duration: "1 hour" }
                        ]
                    },
                    {
                        sectionTitle: "Backend Development",
                        lectures: [
                            { title: "Introduction to Node.js", duration: "1.5 hours" },
                            { title: "Working with Databases", duration: "2 hours" }
                        ]
                    }
                ],
                price: "Rs.599"
            },
            {
                id: 4,
                title: "React Native for Beginners",
                description: "Learn to build mobile apps with React Native.",
                instructor: "Sarah Lee",
                duration: "6 hours",
               thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhY3Rqc3xlbnwwfHwwfHx8Mg%3D%3D",
                overview: `This course will introduce you to React Native, a popular framework for building mobile apps. You'll learn how to create apps for both Android and iOS using a single codebase.`,
                prerequisites: "Basic understanding of JavaScript",
                learn: [
                    "Build mobile apps for Android and iOS",
                    "Understand the core concepts of React Native",
                    "Deploy apps to the Google Play Store and Apple App Store"
                ],
                includes: {
                    video: "6 hours on-demand video",
                    resources: "2 downloadable resources",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Getting Started with React Native",
                        lectures: [
                            { title: "Setting Up the Development Environment", duration: "30 min" },
                            { title: "Creating Your First App", duration: "1 hour" }
                        ]
                    },
                    {
                        sectionTitle: "Core Concepts",
                        lectures: [
                            { title: "Working with Components", duration: "45 min" },
                            { title: "State and Props", duration: "1 hour" }
                        ]
                    }
                ],
                price: "Rs.399"
            }
        ]
    },
    {
        category: "Lifestyle",
        courses: [
            {
              "id": 5,
            "title": "Healthy Living Essentials",
            "description": "Learn how to maintain a healthy lifestyle.",
            "instructor": "Emily White",
            "duration": "4 hours",
            "thumbnail": "https://images.unsplash.com/photo-1478144592103-25e218a04891?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoeSUyMGxpZmVzdHlsZXxlbnwwfHwwfHx8Mg%3D%3D",
            "overview": "This course covers the fundamentals of healthy living, including nutrition, exercise, and mental well-being. You’ll learn how to create balanced meals, establish a fitness routine, and develop habits that support overall health.",
            "prerequisites": "None",
            "learn": [
                "Understand the basics of nutrition and healthy eating",
                "Create a sustainable fitness routine",
                "Develop habits for long-term physical and mental well-being"
            ],
            "includes": {
                "video": "4 hours on-demand video",
                "resources": "5 downloadable resources",
                "access": "Access on mobile and TV",
                "lifetime": "Full lifetime access",
                "certificate": "Certificate of completion"
            },
            "content": [
                {
                    "sectionTitle": "Introduction to Healthy Living",
                    "lectures": [
                        { "title": "What is Healthy Living?", "duration": "15 min" },
                        { "title": "Nutrition Basics", "duration": "25 min" }
                    ]
                },
                {
                    "sectionTitle": "Physical Activity and Fitness",
                    "lectures": [
                        { "title": "Creating a Fitness Routine", "duration": "30 min" },
                        { "title": "The Importance of Exercise", "duration": "35 min" }
                    ]
                },
                {
                    "sectionTitle": "Mental Well-being",
                    "lectures": [
                        { "title": "Stress Management Techniques", "duration": "20 min" },
                        { "title": "Building Healthy Habits", "duration": "30 min" }
                    ]
                }
            ],
            "price": "Rs.499"
            },
            {
                "id": 6,
                "title": "Minimalist Living",
                "description": "Simplify your life with minimalist principles.",
                "instructor": "Frank Green",
                "duration": "3 hours",
                "thumbnail": "https://images.unsplash.com/photo-1529651737248-dad5e287768e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1pbmltYWxpc3R8ZW58MHx8MHx8fDI%3D",
                "overview": "This course guides you through the principles of minimalism, helping you to declutter your home, simplify your life, and focus on what truly matters. Learn how to live with less and enjoy more freedom and peace of mind.",
                "prerequisites": "None",
                "learn": [
                    "Understand the core principles of minimalism",
                    "Declutter your living space effectively",
                    "Adopt a minimalist mindset in daily life"
                ],
                "includes": {
                    "video": "3 hours on-demand video",
                    "resources": "3 downloadable resources",
                    "access": "Access on mobile and TV",
                    "lifetime": "Full lifetime access",
                    "certificate": "Certificate of completion"
                },
                "content": [
                    {
                        "sectionTitle": "Introduction to Minimalism",
                        "lectures": [
                            { "title": "What is Minimalism?", "duration": "15 min" },
                            { "title": "The Benefits of a Minimalist Lifestyle", "duration": "20 min" }
                        ]
                    },
                    {
                        "sectionTitle": "Decluttering Your Life",
                        "lectures": [
                            { "title": "Decluttering Your Home", "duration": "30 min" },
                            { "title": "Organizing for Simplicity", "duration": "35 min" }
                        ]
                    },
                    {
                        "sectionTitle": "Living as a Minimalist",
                        "lectures": [
                            { "title": "Adopting a Minimalist Mindset", "duration": "25 min" },
                            { "title": "Sustaining Minimalism", "duration": "30 min" }
                        ]
                    }
                ],
                "price": "Rs.399"
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
                overview: `Learn how to manage your time effectively with this comprehensive course. You'll discover strategies for prioritizing tasks, avoiding procrastination, and achieving your goals.`,
                prerequisites: "None",
                learn: [
                    "Understand the principles of effective time management",
                    "Learn techniques to prioritize tasks and avoid procrastination",
                    "Develop a personalized time management plan"
                ],
                includes: {
                    video: "3.5 hours on-demand video",
                    resources: "2 downloadable resources",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Introduction to Time Management",
                        lectures: [
                            { title: "Why Time Management Matters", duration: "20 min" },
                            { title: "Setting Goals and Priorities", duration: "30 min" }
                        ]
                    },
                    {
                        sectionTitle: "Advanced Time Management Techniques",
                        lectures: [
                            { title: "The Pomodoro Technique", duration: "25 min" },
                            { title: "Managing Distractions", duration: "40 min" }
                        ]
                    }
                ],
                price: "Rs.499"
            },
            {
                id: 8,
                title: "Emotional Intelligence at Work",
                description: "Improve your interpersonal skills and emotional awareness.",
                instructor: "Laura White",
                duration: "5 hours",
                thumbnail: "https://images.unsplash.com/photo-1515191107209-c28698631303?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vc3QlMjBjb25maWRlbmNlfGVufDB8fDB8fHwy",
                overview: `This course focuses on the importance of emotional intelligence in the workplace. You'll learn how to recognize and manage your own emotions, as well as how to empathize with others.`,
                prerequisites: "None",
                learn: [
                    "Understand the components of emotional intelligence",
                    "Learn how to manage your emotions effectively",
                    "Improve your communication and interpersonal skills"
                ],
                includes: {
                    video: "5 hours on-demand video",
                    resources: "3 downloadable resources",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Understanding Emotional Intelligence",
                        lectures: [
                            { title: "The Four Components of EI", duration: "30 min" },
                            { title: "Self-Awareness and Self-Regulation", duration: "45 min" }
                        ]
                    },
                    {
                        sectionTitle: "Applying EI in the Workplace",
                        lectures: [
                            { title: "Effective Communication", duration: "1 hour" },
                            { title: "Conflict Resolution", duration: "1.5 hours" }
                        ]
                    }
                ],
                price: "Rs.399"
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
                overview: `This course covers the essentials of entrepreneurship, from developing a business idea to launching and scaling your business. You'll learn about market research, business planning, financing, and more.`,
                prerequisites: "None",
                learn: [
                    "Develop a viable business idea",
                    "Understand market research and business planning",
                    "Learn about funding options and financial management"
                ],
                includes: {
                    video: "7 hours on-demand video",
                    resources: "4 downloadable resources",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Getting Started with Entrepreneurship",
                        lectures: [
                            { title: "Identifying Business Opportunities", duration: "45 min" },
                            { title: "Market Research Basics", duration: "1 hour" }
                        ]
                    },
                    {
                        sectionTitle: "Business Planning",
                        lectures: [
                            { title: "Creating a Business Plan", duration: "1.5 hours" },
                            { title: "Financial Planning and Budgeting", duration: "2 hours" }
                        ]
                    }
                ],
                price: "Rs.699"
            },
            {
                id: 10,
                title: "Digital Marketing Strategies",
                description: "Master the art of digital marketing.",
                instructor: "Angela Martin",
                duration: "6 hours",
                thumbnail: "https://images.unsplash.com/photo-1664575601786-b00156752b61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZW50cmVwcmVuZXVyfGVufDB8fDB8fHwy",
                overview: `This course teaches you the latest strategies and techniques in digital marketing. You'll learn about SEO, social media marketing, content marketing, and how to measure the success of your campaigns.`,
                prerequisites: "None",
                learn: [
                    "Understand the basics of SEO and social media marketing",
                    "Create effective digital marketing campaigns",
                    "Measure and analyze campaign performance"
                ],
                includes: {
                    video: "6 hours on-demand video",
                    resources: "3 downloadable resources",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Introduction to Digital Marketing",
                        lectures: [
                            { title: "Understanding SEO", duration: "45 min" },
                            { title: "Social Media Marketing Basics", duration: "1 hour" }
                        ]
                    },
                    {
                        sectionTitle: "Advanced Marketing Strategies",
                        lectures: [
                            { title: "Content Marketing", duration: "1.5 hours" },
                            { title: "Measuring Campaign Success", duration: "2 hours" }
                        ]
                    }
                ],
                price: "Rs.599"
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
                overview: `Learn how to manage your personal finances effectively with this course. You'll explore budgeting, saving, investing, and planning for retirement.`,
                prerequisites: "None",
                learn: [
                    "Create and stick to a budget",
                    "Understand different investment options",
                    "Plan for your financial future"
                ],
                includes: {
                    video: "4 hours on-demand video",
                    resources: "2 downloadable resources",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Introduction to Personal Finance",
                        lectures: [
                            { title: "Budgeting Basics", duration: "30 min" },
                            { title: "Saving Strategies", duration: "45 min" }
                        ]
                    },
                    {
                        sectionTitle: "Investing and Retirement Planning",
                        lectures: [
                            { title: "Understanding Investments", duration: "1 hour" },
                            { title: "Planning for Retirement", duration: "1.5 hours" }
                        ]
                    }
                ],
                price: "Rs.499"
            },
            {
                id: 12,
                title: "Stock Market Investing",
                description: "Learn how to invest in the stock market like a pro.",
                instructor: "Warren Buffett",
                duration: "8 hours",
                thumbnail: "https://images.unsplash.com/photo-1638481826540-7710b13f7d53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEludmVzdGluZyUyMGZvciUyMEJlZ2lubmVyc3xlbnwwfHwwfHx8Mg%3D%3D",
                overview: `This course provides an in-depth look at stock market investing. You'll learn about different types of stocks, how to analyze market trends, and strategies for building a profitable portfolio.`,
                prerequisites: "Basic understanding of finance",
                learn: [
                    "Analyze and pick stocks for your portfolio",
                    "Understand market trends and indicators",
                    "Develop long-term investment strategies"
                ],
                includes: {
                    video: "8 hours on-demand video",
                    resources: "4 downloadable resources",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Introduction to Stock Market",
                        lectures: [
                            { title: "Understanding Stocks", duration: "45 min" },
                            { title: "Market Indicators", duration: "1 hour" }
                        ]
                    },
                    {
                        sectionTitle: "Building Your Portfolio",
                        lectures: [
                            { title: "Choosing the Right Stocks", duration: "1.5 hours" },
                            { title: "Long-Term vs. Short-Term Investing", duration: "2 hours" }
                        ]
                    }
                ],
                price: "Rs.599"
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
                overview: `In this course, you'll learn how to use social media platforms like Facebook, Instagram, and Twitter to promote your brand and engage with your audience. We'll cover content creation, advertising, and analytics.`,
                prerequisites: "None",
                learn: [
                    "Develop a social media marketing strategy",
                    "Create engaging content for social platforms",
                    "Analyze and optimize social media campaigns"
                ],
                includes: {
                    video: "5 hours on-demand video",
                    resources: "3 downloadable resources",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Social Media Fundamentals",
                        lectures: [
                            { title: "Understanding Social Media", duration: "30 min" },
                            { title: "Content Creation", duration: "1 hour" }
                        ]
                    },
                    {
                        sectionTitle: "Advertising and Analytics",
                        lectures: [
                            { title: "Running Ads on Social Media", duration: "1.5 hours" },
                            { title: "Analyzing Campaign Performance", duration: "2 hours" }
                        ]
                    }
                ],
                price: "Rs.699"
            },
            {
                id: 14,
                title: "Content Marketing Mastery",
                description: "Learn how to create and distribute valuable content.",
                instructor: "Ryan Howard",
                duration: "4 hours",
                thumbnail: "https://images.unsplash.com/photo-1603145733146-ae562a55031e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fHwy",
                overview: `This course will teach you the art of content marketing, from planning and creation to distribution and measurement. You'll learn how to attract and retain customers by consistently creating and curating valuable content.`,
                prerequisites: "None",
                learn: [
                    "Plan and execute a content marketing strategy",
                    "Create high-quality content that resonates with your audience",
                    "Distribute and measure the success of your content"
                ],
                includes: {
                    video: "4 hours on-demand video",
                    resources: "2 downloadable resources",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Introduction to Content Marketing",
                        lectures: [
                            { title: "What is Content Marketing?", duration: "20 min" },
                            { title: "Understanding Your Audience", duration: "30 min" }
                        ]
                    },
                    {
                        sectionTitle: "Content Creation and Distribution",
                        lectures: [
                            { title: "Creating Engaging Content", duration: "1 hour" },
                            { title: "Distributing Content", duration: "1.5 hours" }
                        ]
                    }
                ],
                price: "Rs.499"
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
                overview: `This course will teach you how to take professional-quality portrait photos. You'll learn about lighting, posing, and post-processing techniques to create stunning portraits.`,
                prerequisites: "Basic understanding of photography",
                learn: [
                    "Master portrait photography techniques",
                    "Learn how to use lighting effectively",
                    "Improve your post-processing skills"
                ],
                includes: {
                    video: "3.5 hours on-demand video",
                    resources: "2 downloadable resources",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Introduction to Portrait Photography",
                        lectures: [
                            { title: "Understanding Portrait Photography", duration: "20 min" },
                            { title: "Lighting Techniques", duration: "30 min" }
                        ]
                    },
                    {
                        sectionTitle: "Posing and Composition",
                        lectures: [
                            { title: "Posing Your Subjects", duration: "40 min" },
                            { title: "Creating Dynamic Compositions", duration: "45 min" }
                        ]
                    }
                ],
                price: "Rs.399"
            },
            
            {
                id: 16,
                title: "Advanced Portrait Photography",
                description: "Master portrait photography techniques.",
                instructor: "Paul Taylor",
                duration: "6 hours",
                thumbnail: "https://images.unsplash.com/photo-1462804993656-fac4ff489837?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxBZHZhbmNlZCUyMFBvcnRyYWl0JTIwUGhvdG9ncmFwaHl8ZW58MHx8MHx8fDI%3D",
                overview: `Learn the art of street photography in this comprehensive course. You'll explore techniques for capturing candid moments, using natural light, and telling stories through your photos.`,
                prerequisites: "Basic understanding of photography",
                learn: [
                    "Capture candid street scenes",
                    "Use natural light to your advantage",
                    "Tell compelling stories through your photos"
                ],
                includes: {
                    video: "4 hours on-demand video",
                    resources: "3 downloadable resources",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Introduction to Street Photography",
                        lectures: [
                            { title: "What is Street Photography?", duration: "15 min" },
                            { title: "Finding Inspiration on the Streets", duration: "30 min" }
                        ]
                    },
                    {
                        sectionTitle: "Advanced Street Photography Techniques",
                        lectures: [
                            { title: "Capturing Candid Moments", duration: "1 hour" },
                            { title: "Using Natural Light", duration: "1.5 hours" }
                        ]
                    }
                ],
                price: "Rs.499"
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
                prerequisites: "Basic understanding of programming",
                learn: [
                    "Understand the fundamentals of data science",
                    "Learn Python programming for data analysis",
                    "Explore machine learning basics"
                ],
                includes: {
                    video: "6 hours on-demand video",
                    resources: "3 downloadable resources",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Getting Started with Data Science",
                        lectures: [
                            { title: "Introduction to Data Science", duration: "30 min" },
                            { title: "Python Basics", duration: "45 min" }
                        ]
                    },
                    {
                        sectionTitle: "Data Analysis",
                        lectures: [
                            { title: "Pandas for Data Analysis", duration: "1 hour" },
                            { title: "Data Visualization with Matplotlib", duration: "1 hour" }
                        ]
                    },
                    {
                        sectionTitle: "Introduction to Machine Learning",
                        lectures: [
                            { title: "Supervised Learning", duration: "1.5 hours" },
                            { title: "Unsupervised Learning", duration: "1.5 hours" }
                        ]
                    }
                ],
                price: "Rs.699"
            },
            {
                id: 18,
                title: "Advanced Machine Learning",
                description: "Master advanced machine learning techniques.",
                instructor: "Kevin Malone",
                duration: "8 hours",
                thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGF0YSUyMEFuYWx5c2lzJTIwd2l0aCUyMFB5dGhvbnxlbnwwfHwwfHx8Mg%3D%3D",
                overview: `This course is designed for those who already have a basic understanding of machine learning and want to dive deeper. You'll learn about deep learning, neural networks, and advanced algorithms.`,
                prerequisites: "Basic understanding of machine learning",
                learn: [
                    "Explore advanced machine learning algorithms",
                    "Understand deep learning and neural networks",
                    "Apply machine learning to real-world problems"
                ],
                includes: {
                    video: "8 hours on-demand video",
                    resources: "4 downloadable resources",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Advanced Machine Learning Concepts",
                        lectures: [
                            { title: "Deep Learning Overview", duration: "1 hour" },
                            { title: "Neural Networks", duration: "1.5 hours" }
                        ]
                    },
                    {
                        sectionTitle: "Practical Applications",
                        lectures: [
                            { title: "Machine Learning for NLP", duration: "1.5 hours" },
                            { title: "Computer Vision Techniques", duration: "2 hours" }
                        ]
                    }
                ],
                price: "Rs.599"
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
                overview: `This course is designed for those who are new to yoga. You'll learn basic yoga poses, breathing techniques, and how to create a consistent practice.`,
                prerequisites: "None",
                learn: [
                    "Understand the fundamentals of yoga",
                    "Learn basic yoga poses and techniques",
                    "Create a consistent yoga practice"
                ],
                includes: {
                    video: "4 hours on-demand video",
                    resources: "2 downloadable resources",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Introduction to Yoga",
                        lectures: [
                            { title: "What is Yoga?", duration: "20 min" },
                            { title: "Breathing Techniques", duration: "30 min" }
                        ]
                    },
                    {
                        sectionTitle: "Basic Yoga Poses",
                        lectures: [
                            { title: "Mountain Pose", duration: "15 min" },
                            { title: "Downward Dog", duration: "20 min" }
                        ]
                    },
                    {
                        sectionTitle: "Creating a Consistent Practice",
                        lectures: [
                            { title: "Building a Routine", duration: "30 min" },
                            { title: "Yoga for Relaxation", duration: "40 min" }
                        ]
                    }
                ],
                price: "Rs.399"
            },
            
            {
                id: 20,
                title: "Fitness for Busy People",
                description: "Learn how to stay fit with a busy schedule.",
                instructor: "Angela Martin",
                duration: "3 hours",
              thumbnail: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE51dHJpdGlvbiUyMEJhc2ljc3xlbnwwfHwwfHx8Mg%3D%3D",
                prerequisites: "None",
                learn: [
                    "Discover quick and effective workouts",
                    "Learn meal planning tips for a healthy lifestyle",
                    "Stay motivated and consistent"
                ],
                includes: {
                    video: "3 hours on-demand video",
                    resources: "2 downloadable resources",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Introduction to Fitness",
                        lectures: [
                            { title: "Importance of Fitness", duration: "15 min" },
                            { title: "Setting Realistic Goals", duration: "20 min" }
                        ]
                    },
                    {
                        sectionTitle: "Quick and Effective Workouts",
                        lectures: [
                            { title: "10-Minute Workouts", duration: "15 min" },
                            { title: "Full-Body Workouts", duration: "30 min" }
                        ]
                    },
                    {
                        sectionTitle: "Meal Planning and Motivation",
                        lectures: [
                            { title: "Healthy Meal Planning", duration: "30 min" },
                            { title: "Staying Consistent", duration: "40 min" }
                        ]
                    }
                ],
                price: "Rs.599"
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
                overview: `This course is tailored for beginners looking to learn the basics of playing the guitar. You'll start with essential chords, strumming patterns, and simple songs.`,
                prerequisites: "None",
                learn: [
                    "Understand basic guitar anatomy",
                    "Learn fundamental chords and strumming techniques",
                    "Play simple songs and progress to more complex pieces"
                ],
                includes: {
                    video: "6 hours on-demand video",
                    resources: "3 downloadable resources",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Getting Started with Guitar",
                        lectures: [
                            { title: "Introduction to the Guitar", duration: "20 min" },
                            { title: "Basic Chords", duration: "30 min" }
                        ]
                    },
                    {
                        sectionTitle: "Strumming and Playing",
                        lectures: [
                            { title: "Strumming Patterns", duration: "25 min" },
                            { title: "Playing Simple Songs", duration: "35 min" }
                        ]
                    },
                    {
                        sectionTitle: "Advancing Your Skills",
                        lectures: [
                            { title: "More Complex Chords", duration: "30 min" },
                            { title: "Improvisation Techniques", duration: "40 min" }
                        ]
                    }
                ],
                price: "Rs.699"
            },
            {
                id: 22,
                title: "Music Theory Basics",
                description: "Understand the fundamentals of music theory.",
                instructor: "Victor Johnson",
                duration: "5 hours",
                thumbnail: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TXVzaWMlMjBUaGVvcnklMjBCYXNpY3N8ZW58MHx8MHx8fDI%3D",
                overview: `This course covers the core principles of music theory, including scales, chords, and rhythm. It's perfect for those who want to deepen their understanding of music.`,
                prerequisites: "None",
                learn: [
                    "Grasp basic musical notation",
                    "Learn about scales and chords",
                    "Understand rhythm and time signatures"
                ],
                includes: {
                    video: "5 hours on-demand video",
                    resources: "2 downloadable resources",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Introduction to Music Theory",
                        lectures: [
                            { title: "Musical Notation", duration: "20 min" },
                            { title: "Understanding Scales", duration: "30 min" }
                        ]
                    },
                    {
                        sectionTitle: "Chords and Harmony",
                        lectures: [
                            { title: "Basic Chords", duration: "25 min" },
                            { title: "Chord Progressions", duration: "35 min" }
                        ]
                    },
                    {
                        sectionTitle: "Rhythm and Time",
                        lectures: [
                            { title: "Rhythm Basics", duration: "30 min" },
                            { title: "Time Signatures", duration: "30 min" }
                        ]
                    }
                ],
                price: "Rs.599"
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
                overview: `This course provides strategies and techniques for effective teaching. It's ideal for both new and experienced educators looking to enhance their teaching skills.`,
                prerequisites: "None",
                learn: [
                    "Implement effective teaching methods",
                    "Engage and motivate students",
                    "Assess and evaluate student progress"
                ],
                includes: {
                    video: "6 hours on-demand video",
                    resources: "3 downloadable resources",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Teaching Fundamentals",
                        lectures: [
                            { title: "Teaching Methods Overview", duration: "30 min" },
                            { title: "Creating Engaging Lessons", duration: "30 min" }
                        ]
                    },
                    {
                        sectionTitle: "Student Engagement",
                        lectures: [
                            { title: "Motivating Students", duration: "25 min" },
                            { title: "Interactive Techniques", duration: "35 min" }
                        ]
                    },
                    {
                        sectionTitle: "Assessment and Evaluation",
                        lectures: [
                            { title: "Effective Assessments", duration: "30 min" },
                            { title: "Evaluating Student Progress", duration: "30 min" }
                        ]
                    }
                ],
                price: "Rs.499"
            },
            {
                id: 24,
                title: "Educational Psychology",
                description: "Understand the principles of educational psychology.",
                instructor: "Xander Lewis",
                duration: "7 hours",
               thumbnail: "https://images.unsplash.com/photo-1609660100545-05f3799a941b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEVkdWNhdGlvbmFsJTIwUHN5Y2hvbG9neXxlbnwwfHwwfHx8Mg%3D%3D",
                overview: `This course explores key concepts in educational psychology, including cognitive development, learning theories, and classroom management.`,
                prerequisites: "None",
                learn: [
                    "Understand cognitive development",
                    "Apply learning theories in educational settings",
                    "Implement effective classroom management strategies"
                ],
                includes: {
                    video: "7 hours on-demand video",
                    resources: "3 downloadable resources",
                    access: "Access on mobile and TV",
                    lifetime: "Full lifetime access",
                    certificate: "Certificate of completion"
                },
                content: [
                    {
                        sectionTitle: "Introduction to Educational Psychology",
                        lectures: [
                            { title: "Cognitive Development", duration: "30 min" },
                            { title: "Learning Theories", duration: "30 min" }
                        ]
                    },
                    {
                        sectionTitle: "Applying Psychology in Education",
                        lectures: [
                            { title: "Classroom Management", duration: "30 min" },
                            { title: "Motivating Students", duration: "30 min" }
                        ]
                    },
                    {
                        sectionTitle: "Advanced Topics",
                        lectures: [
                            { title: "Learning Disabilities", duration: "30 min" },
                            { title: "Educational Assessment", duration: "30 min" }
                        ]
                    }
                ],
                price: "Rs.399"
            }
        ]
    }

];



function BuyNowModal({ onClose }) {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');


  const { id } = useParams();
  const courseId = parseInt(id);
  const selectedCourse = coursesData
        .flatMap(category => category.courses)
        .find(course => course.id === courseId);

    if (!selectedCourse) {
        return <div>Course not found</div>;
    }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Complete Your Purchase</h2>
        <div>
        <h1 >{selectedCourse.title}</h1>
        <p><strong>Instructor:</strong> {selectedCourse.instructor}</p>
         <p><strong>Duration:</strong> {selectedCourse.duration}</p>
        
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Country:</label>
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
        </div>

        <div className="form-group">
          <label>State:</label>
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Payment Method:</label>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="">Select Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>

        <div className="form-group">
          <p><strong>Total:{selectedCourse.price}</strong></p>
        </div>

        <button className="confirm-purchase-button" >Complete Checkout</button>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default BuyNowModal;
