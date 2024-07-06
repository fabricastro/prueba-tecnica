import React, { useState, useEffect, useRef } from 'react';
import info from '../../data/info.json';

export const Body = () => {
    const [filter, setFilter] = useState('All');
    const itemsRef = useRef([]);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredInfo = info.filter(item => filter === 'All' || item.chip === filter);
    //animacion
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = `${index * 0.80}s`; 
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        });

        itemsRef.current.forEach(item => {
            if (item) observer.observe(item);
        });

        return () => {
            itemsRef.current.forEach(item => {
                if (item) observer.unobserve(item);
            });
        };
    }, [filteredInfo]);

    return (
        <>
            <div>
                <div className="pt-[20px] xl:pt-[80px]">
                    <div className="xl:flex xl:justify-between xl:items-center">
                        <h2 className="text-h2mobile text-ui-color3 xl:text-h1">Release 6.5</h2>
                        <div className="pt-[10px] flex items-center space-x-2">
                            <span className="text-ui-color3 text-description">Sort by:</span>
                            <div className="relative">
                                <select 
                                    className="text-description1 appearance-none w-[182px] px-[18px] h-[39px] bg-white border border-[#DEE7F0] rounded-full shadow-sm focus:outline-none" 
                                    onChange={handleFilterChange}
                                >
                                    <option value="All">All</option>
                                    <option value="Feat">Feat</option>
                                    <option value="Fix">Fix</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                    <svg width="8" height="12" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[18px]">
                                        <path d="M0.510249 3.47877L4.97278 7.99047C5.64474 8.66984 6.73023 8.66984 7.40219 7.99047L11.8647 3.47877C12.933 2.38133 12.1749 0.5 10.6414 0.5L1.73357 0.5C0.182881 0.499999 -0.575232 2.38133 0.510249 3.47877Z" fill="#0D5287" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divisor my-[11px] rounded"></div>
                </div>
            </div>
            <ol className="relative border-info border-color16 dark:border-gray-700">
                {filteredInfo.map((item, index) => {
                    const chipClass = item.chip === 'Fix' ? 'bg-chip-color9 text-chip-color8' : 'bg-chip-color7';
                    return (
                        <li 
                            key={index} 
                            className="mb-10 ms-4"
                            ref={el => itemsRef.current[index] = el}
                        >
                            <div className="absolute w-[18px] h-[18px] bg-primary rounded-full -start-[26px] border border-primary"></div>
                            <h3 className="font-semibold text-ui-color3 text-h2 ml-[5px] xl:text-title">{item.title}</h3>
                            <div className="my-[10px]">
                                <span className={`${chipClass} rounded-[20px] text-chips px-[16px] py-[4px] text-chip-color6`}>{item.chip}</span>
                                <span className='text-date text-ui-color2 pl-[10px]'>{item.date}</span>
                            </div>
                            <p className="mb-4 text-base font-normal text-date text-ui-color3">{item.text}</p>
                            {item.details && (
                                <ul className="list-disc ml-5 text-base font-normal text-date text-ui-color3">
                                    {item.details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            )}
                            {item.img && <img src={item.img} alt="Notification" />}
                        </li>
                    );
                })}
            </ol>
        </>
    );
};
