import React, { useState } from 'react';


const HttpStatusCodes = () => {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (e) => {
        setFilter(e.target.value.toUpperCase());
    };

    const statusCodes = [
        { code: 100, message: 'Continue', category: '1xx: Informational' },
        { code: 101, message: 'Switching Protocols', category: '1xx: Informational' },
        { code: 102, message: 'Processing', category: '1xx: Informational' },
        { code: 200, message: 'OK', category: '2xx: Success' },
        { code: 201, message: 'Created', category: '2xx: Success' },
        { code: 202, message: 'Accepted', category: '2xx: Success' },
        { code: 300, message: 'Multiple Choices', category: '3xx: Redirection' },
        { code: 301, message: 'Moved Permanently', category: '3xx: Redirection' },
        { code: 302, message: 'Found', category: '3xx: Redirection' },
        { code: 400, message: 'Bad Request', category: '4xx: Client Error' },
        { code: 401, message: 'Unauthorized', category: '4xx: Client Error' },
        { code: 403, message: 'Forbidden', category: '4xx: Client Error' },
        { code: 500, message: 'Internal Server Error', category: '5xx: Server Error' },
        { code: 501, message: 'Not Implemented', category: '5xx: Server Error' },
        { code: 502, message: 'Bad Gateway', category: '5xx: Server Error' },
    ];

    const filteredCodes = statusCodes.filter(code =>
        code.message.toUpperCase().includes(filter) ||
        code.code.toString().includes(filter)
    );

    const categories = Array.from(new Set(filteredCodes.map(code => code.category)));

    return (
        <div className="container">
            <h1>HTTP Status Codes</h1>
            <input
                type="text"
                id="filter"
                placeholder="Filter status codes..."
                value={filter}
                onChange={handleFilterChange}
            />
            <div className="code-list">
                {categories.map(category => (
                    <div className="code-item" key={category}>
                        <h2>{category}</h2>
                        <ul>
                            {filteredCodes
                                .filter(code => code.category === category)
                                .map(code => (
                                    <li key={code.code}>{code.code} {code.message}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HttpStatusCodes;

