import React, { FC } from "react";
import Image from "next/image";

interface ITodoItem {
    item: string;
    itemKey: number;
    onUpdate: (key: number, label: string) => void;
}

const TodoItem: FC<ITodoItem> = ({ item, itemKey, onUpdate }) => {
    return (
        <div className="w-[60ch] rounded-md p-3 border border-1 border-orange-200 flex items-top justify-end gap-x-3">
            <span className="mr-auto">{item}</span>
            <button
                type="button"
                className="h-10 w-10 flex justify-center items-center rounded-full bg-orange-300"
                onClick={() => onUpdate(itemKey, item)}
            >
                <Image
                    src="/vectors/icon-edit.svg"
                    alt=""
                    width={0}
                    height={0}
                    className="w-5 h-5 hover:w-6 hover:h-6 duration-200"
                />
            </button>
            <button
                type="button"
                className="h-10 w-10 flex justify-center items-center rounded-full bg-orange-300"
            >
                <Image
                    src="/vectors/icon-delete.svg"
                    alt=""
                    width={0}
                    height={0}
                    className="w-5 h-5 hover:w-6 hover:h-6 duration-200"
                />
            </button>
        </div>
    );
};

export default TodoItem;
