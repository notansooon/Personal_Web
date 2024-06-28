import { CalendarDaysIcon } from '@heroicons/react/24/outline';

export default function Example() {
    return (
        <div className="relative isolate overflow-hidden bg-transparent py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-xl lg:max-w-lg mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Subscribe to our newsletter.
                    </h2>
                    <div className="mt-6 flex max-w-md gap-x-4">
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            placeholder="Enter your email"
                        />
                        <button
                            type="submit"
                            className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Subscribe
                        </button>
                    </div>
                    <div className="mt-10 flex flex-col items-start">
                        <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                            <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
                        <dd className="mt-2 leading-7 text-gray-400">
                            Get weekly updates from DLQF meetings.
                        </dd>
                    </div>
                </div>
            </div>

        </div>
    );
}

