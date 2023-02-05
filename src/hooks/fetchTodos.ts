/* eslint-disable react-hooks/exhaustive-deps */
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import { doc } from "firebase/firestore";
import { useAuth } from "@/context/AuthContext";
import { useMemo } from "react";

const useFecthTodos = () => {
    const { currentUser } = useAuth();
    const [value, loading, error] = useDocument(
        doc(db, "users", currentUser!.uid),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    const todoList = useMemo(() => {
        if (value) {
            return value.data()!.todos;
        }
    }, [value]);

    return {
        loading,
        error,
        todoList,
    };
};

export default useFecthTodos;
