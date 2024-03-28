import Image from "next/image";
import React from "react";

export const Profile = () => {
    return (
        <div style={{ width: "400px", height: "400px", backgroundColor: "yellow" }}>
            <div>
                <Image
                    alt="프로필 이미지"
                    src={
                        "https://static.cdn.soomgo.com/upload/portfolio/58a10944-d6e4-46b1-90ab-6c706f6bd999.png?webp=1"
                    }
                />
            </div>
            새싹쿵야 아니고 쿵쿵
        </div>
    );
};
