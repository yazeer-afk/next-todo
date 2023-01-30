import React, { FC } from "react";

interface IAppWrapperProps {
    children: JSX.Element;
}

const AppWrapper: FC<IAppWrapperProps> = ({ children }) => {
    return (
        <>
            <div className="relative">
                <nav className="fixed bg-white shadow-md top-0 left-0 right-0 z-10 h-16 px-16 flex items-center justify-end gap-x-2 select-none">
                    <h5 className="mr-auto text-4xl font-extrabold">
                        TODO List
                    </h5>
                    <span>Home</span>
                    <span>Tasks</span>
                </nav>
                <section className="mt-20 px-16">{children}</section>
            </div>
            <div className="fixed bottom-0 left-0 right-0 z-10 h-12 flex justify-center items-center text-center bg-gray-200">
                <span className="text-sm font-semibold">Footer text</span>
            </div>
        </>
    );
};

export default AppWrapper;
