"use client";
import useQuiz from "@/hooks/useQuiz";
import { Tabs } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useContext, useEffect, useState } from "react";
// import styles from "./../app/page.module.css";
import CategoryCard from "@/component/CategoryCard";
import { UserContext } from "@/context/UserContext";
import useCoin from "@/hooks/useCoin";
import React from "react";
import styles from "../../app/page.module.css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface Categories {
  created_at: Date
  id: number
  isActive: boolean
  name: string
  thumbnail: string
  updated_at: Date
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ marginTop: "20px" }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export default function Home() {
  const router = useRouter();
  const [categories, setCategories] = useState<Categories[]>([]);
  const [quizzes, setQuizzes] = useState([]);
  const [quizzesT, setQuizzesT] = useState([]);

  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [tabValue, setTabValue] = useState(0);

  const { fetchCategories, fetchQuizzes } = useQuiz();
  const { setOldUser } = useCoin();
  const { modal, setModal } = useContext<any>(UserContext);

  useEffect(() => {
    getAllQuizzes();

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
  }, []);

  useEffect(() => {
    if (category) {
      const index = categories.findIndex((ele: any) => ele._id === category);
      setTabValue(index + 1);
      callQuizzes(category);
    }
  }, [quizzesT])

  const callQuizzes = async (categoryId: any) => {
    if (categoryId) {
      const quiz1 = quizzesT.filter((ele: any) => ele.category._id === categoryId)
      // const quiz: any = await fetchQuizByCategory(categoryId)
      setQuizzes(quiz1);
    }
  }

  const getAllQuizzes = useCallback(async () => {
    if (category) {
      setTabValue(0);
      router.push('/home')
    }
    const allQuizzes = await fetchQuizzes();
    setQuizzes(allQuizzes.data.data);
    setQuizzesT(allQuizzes.data.data);
  }, [])

  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setTabValue(newValue);
  };

  return (
    <>
      {/* {modal && <WelcomeModal isOpen={modal} onClose={() => { setModal(false); setOldUser(); }} />} */}
      <div className="category_sec" style={{ overflow: "auto" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", padding: "0" }}>
          {/* <Box sx={{ textAlign: 'end', marginBottom: '20px', }}>
            <Button
              className="contained_button"
              style={{ width: 'fit-content', display: "flex", alignItems: 'center', gap: '10px', marginLeft: 'auto' }}
              variant="contained"
              onClick={() => { }}
            >
              <CardGiftcardIcon />
              <p style={{ fontWeight: 'bold' }}>Get 1000 coin </p>
            </Button>
          </Box> */}
          <Box sx={{ marginTop: '10px'}}></Box>
          <Box className="ad250">
            <ins className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-4238460264484843"
              data-ad-slot="9018076593"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
          </Box>
          <Box sx={{ marginTop: '10px', padding: '15px', paddingTop: '0' }}>
            <Tabs
              value={tabValue}
              onChange={handleChange}
              variant="scrollable"
              aria-label="basic tabs example"
              sx={{ color: 'white', borderBottom: '1px solid #ffb540', paddingBottom: '20px' }}
              key={'category_tabs'}
            >
              <Tab key={'all'} className={styles.tab} label="All" {...a11yProps(0)} onClick={() => getAllQuizzes()} />
              {
                categories.map((ele: any) => {
                  return <Tab
                    key={Math.random() * new Date().getTime()}
                    className={styles.tab}
                    sx={{ border: '2px solid #ffb540', borderRadius: '50px', margin: '0 5px', minHeight: '40px', maxHeight: '40px' }}
                    label={ele.name}
                    value={ele.id}
                    {...a11yProps(1)}
                    onClick={(e) => {
                      callQuizzes(ele._id)
                    }}
                  />
                })
              }
            </Tabs>
            <CustomTabPanel value={tabValue} index={tabValue}>
              {quizzes.map((item, i) => (
                <CategoryCard
                  key={Math.random() * new Date().getTime()}
                  item={item}
                  index={i}
                />
              ))}
            </CustomTabPanel>
          </Box>
        </Box>
      </div>
    </>
  );
}
