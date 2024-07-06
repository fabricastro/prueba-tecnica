import releases from '../data/releases.json';

export const AllRelease = () => {
    return (
        <>
            <section className="xl:pt-[80px] xl:pr-[220px]">
                <h2 className="text-h2mobile text-ui-color3 sticky top-0">All release notes</h2>
                <ol className="pt-[19px] xl:w-[280px] xl:pt-[40px] sticky top-0">
                    {releases.map((release, index) => (
                        <div key={index} className="mb-[19px]">
                            <a href="#" className="text-description text-ui-color2">{release.title}</a>
                        </div>
                    ))}
                    <button className="flex items-center text-color13 hover:text-blue-800 text-chips">
                        View more
                        <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                </ol>
            </section>
        </>
    );
}
