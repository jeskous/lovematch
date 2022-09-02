import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRef, useState } from 'react';
import HeartButton from '../src/components/HeartButton';
import { NameInput } from '../src/components/NameInput';
import ResultModal from '../src/components/ResultModal';

const Home: NextPage = () => {
  const [resultVisible, setResultVisible] = useState(false);
  const [result, setResult] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState('');

  const snameRef = useRef<any>();
  const fnameRef = useRef<any>();

  const handelSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setIsloading(true);

      const sName = snameRef.current.value;
      const fName = fnameRef.current.value;
      if (!sName || sName === '' || !fName || fName === '') {
        throw new Error('Name Missing');
      }

      //get love thing
      const options = {
        method: 'GET',
        url: 'https://love-calculator.p.rapidapi.com/getPercentage',
        params: { sname: sName, fname: fName },
        headers: {
          'X-RapidAPI-Key':
            '104dd96120mshffbc6dbc8004985p1bd330jsnc550518f0775',
          'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
        },
      };

      const resp = await axios.request(options);

      //TODO translate

      setResult(resp.data);
      setIsloading(false);
      setResultVisible(true);
    } catch (e: any) {
      setError(e.message);
      setIsloading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>Love Match</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* CONTENT */}
      <main className="w-screen h-screen flex items-center flex-col">
        <h1 className="mt-16 text-5xl uppercase font-semibold tracking-wide text-white">
          Love Matchico
        </h1>
        {resultVisible ? (
          <ResultModal
            isVisible={resultVisible}
            setResultVisible={setResultVisible}
            result={result}
          />
        ) : (
          <form
            onSubmit={handelSubmit}
            className="absolute top-1/2 bottom-1/2 -translate-y-1/2 flex flex-col justify-around items-center bg-white rounded-xl py-4 px-8 h-80 w-4/5 max-w-sm"
          >
            <NameInput ref={snameRef} value="Your name" />
            <HeartButton />
            <NameInput
              ref={fnameRef}
              value="His/Her name"
              className="text-end "
            />
          </form>
        )}
      </main>
    </div>
  );
};

export default Home;
