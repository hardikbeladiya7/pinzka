"use client";
import useQuiz from "@/hooks/useQuiz";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Category() {

    const { fetchCategories } = useQuiz();
    const [categories, setCategories] = useState<any[]>([]);
    const navigate = useRouter();

    useEffect(() => {
        (async () => {
            const category: any = await fetchCategories();
            setCategories(category.data.data);
        })()
        const script = document.createElement('script');
        script.src = '/ad_script.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [])

    return (
        <>
            <div className="category_sec category_Section" style={{ overflow: "auto" }}>
                <Box className="ad250">
                    <ins className="adsbygoogle"
                        style={{ display: "block" }}
                        data-ad-client="ca-pub-4238460264484843"
                        data-ad-slot="9018076593"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                </Box>
                <Box sx={{ borderBottom: 1, borderColor: "divider", padding: "15px" }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff' }}>Select the Quiz category that you want to play</h2>
                    </Box>

                    <Box className="category_card_section" sx={{ justifyContent: 'space-between', gap: '15px', alignItems: 'center', marginTop: '25px' }}>
                        {
                            categories.map((ele: any) => {
                                return <Box sx={{ cursor: 'pointer', border: '1px solid #ffffff', borderRadius: '50px', padding: '8px', maxWidth: '200px', width: '100%' }}>
                                    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }} onClick={() => { navigate.push(`/home?category=${ele._id}`) }}>
                                        <img className="category_images" src={ele.img} alt="" />
                                        <p style={{ fontSize: '14px', color: '#ffffff', fontWeight: '600', width: '100%', textAlign: 'center' }}>{ele.name}</p>
                                    </Box>
                                </Box>
                            })
                        }
                    </Box>
                </Box>
            </div>
        </>
    );
}
