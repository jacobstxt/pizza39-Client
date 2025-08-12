import { useState } from "react";
import { Pencil } from "lucide-react";

const ProfilePage = () => {
    const [user] = useState({
        name: "Макс",
        email: "max@example.com",
        phone: "+380 99 123 45 67",
        avatar: "https://i.pravatar.cc/150?img=12", // приклад фото
    });

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
            {/* Аватар */}
            <div className="flex flex-col items-center mb-6">
                <img
                    src={user.avatar}
                    alt="Аватар користувача"
                    className="w-28 h-28 rounded-full border-4 border-gray-200 shadow"
                />
                <h1 className="text-2xl font-bold mt-3">{user.name}</h1>
                <p className="text-gray-500 text-sm">{user.email}</p>
            </div>

            {/* Інформація */}
            <div className="space-y-4">
                <div>
                    <strong className="text-gray-700">Ім'я:</strong> {user.name}
                </div>
                <div>
                    <strong className="text-gray-700">Email:</strong> {user.email}
                </div>
                <div>
                    <strong className="text-gray-700">Телефон:</strong> {user.phone}
                </div>
            </div>

            {/* Кнопка редагування */}
            <button
                className="mt-6 w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
                <Pencil size={18} />
                Редагувати профіль
            </button>
        </div>
    );
};

export default ProfilePage;
