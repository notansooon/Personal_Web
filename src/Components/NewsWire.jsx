import React from 'react';

const NewsWire = () => {
    const blogPosts = [
        {
            category: 'Business',
            title: 'Preline becomes an official Instagram Marketing Partner',
            description: 'Great news we\'re eager to share.',
            imageUrl: 'https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            authorImageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
            authorName: 'Aaron Larsson',
            date: 'Feb 15, 2021',
        },
        {
            category: 'Announcements',
            title: 'Announcing a free plan for small teams',
            description: 'At Wake, our mission has always been focused on bringing openness.',
            imageUrl: 'https://images.unsplash.com/photo-1669824774762-65ddf29bee56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            authorImageUrl: 'https://images.unsplash.com/photo-1669720229052-89cda125fc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
            authorName: 'Hanna Wolfe',
            date: 'Feb 4, 2021',
        },
    ];

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid lg:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                    <a key={index} className="group sm:flex rounded-xl" href="#">
                        <div className="flex-shrink-0 relative rounded-xl overflow-hidden h-[200px] sm:w-[250px] sm:h-[350px] w-full">
                            <img className="size-full absolute top-0 start-0 object-cover" src={post.imageUrl} alt="Image Description" />
                        </div>
                        <div className="grow">
                            <div className="p-4 flex flex-col h-full sm:p-6">
                                <div className="mb-3">
                                    <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200">
                                        {post.category}
                                    </p>
                                </div>
                                <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                                    {post.title}
                                </h3>
                                <p className="mt-2 text-gray-600 dark:text-neutral-400">
                                    {post.description}
                                </p>
                                <div className="mt-5 sm:mt-auto">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img className="size-[46px] rounded-full" src={post.authorImageUrl} alt="Image Description" />
                                        </div>
                                        <div className="ms-2.5 sm:ms-4">
                                            <h4 className="font-semibold text-gray-800 dark:text-neutral-200">
                                                {post.authorName}
                                            </h4>
                                            <p className="text-xs text-gray-500 dark:text-neutral-500">
                                                {post.date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default NewsWire;
