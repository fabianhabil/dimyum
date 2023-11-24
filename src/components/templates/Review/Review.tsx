'use client';

import { Button } from '@/components/ui/button/button';
import { Input } from '@/components/ui/input/input';
import { Textarea } from '@/components/ui/textarea/textarea';
import { useToast } from '@/components/ui/toast/use-toast';
import appendSpreadsheet from '@/lib/gsheets';
import { useState } from 'react';

const Review = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [nim, setNim] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [testimoni, setTestimoni] = useState<string>('');
  const { toast } = useToast();

  return (
    <>
      <div
        className="flex h-[150px] items-center justify-center bg-red-500 md:h-[200px]"
        style={{ background: 'url(/hero-banner.png)' }}
      >
        <p className="font-integralbold text-4xl text-white md:text-6xl">FEEDBACK</p>
      </div>

      <div className="container flex min-h-[500px] flex-row flex-wrap items-stretch justify-between gap-8 py-8">
        <div className="flex w-[100%] flex-col gap-8 md:w-[55%]">
          <p className="text-center font-integralbold text-4xl font-black md:text-start">FEEDBACK DIMYUM</p>
          <Input
            className="mx-auto w-[75%] rounded-[0px] border-x-0 border-t-0 border-[rgba(0,0,0,0.3)] md:m-0"
            placeholder="Name"
            onChange={(e) => setName(() => e.target.value)}
          />
          <Input
            className="mx-auto w-[75%] rounded-[0px] border-x-0 border-t-0 border-[rgba(0,0,0,0.3)] md:m-0"
            placeholder="Email Binus"
            onChange={(e) => setEmail(() => e.target.value)}
          />
          <Input
            className="mx-auto w-[75%] rounded-[0px] border-x-0 border-t-0 border-[rgba(0,0,0,0.3)] md:m-0"
            placeholder="NIM"
            onChange={(e) => setNim(() => e.target.value)}
          />
          <Textarea
            className="mx-auto w-[75%] rounded-[0px] border-x-0 border-t-0 border-[rgba(0,0,0,0.3)] md:m-0"
            placeholder="Feedback"
            onChange={(e) => setFeedback(() => e.target.value)}
          />
          <Textarea
            className="mx-auto w-[75%] rounded-[0px] border-x-0 border-t-0 border-[rgba(0,0,0,0.3)] md:m-0"
            placeholder="Testimoni"
            onChange={(e) => setTestimoni(() => e.target.value)}
          />
          <Button
            className="mx-auto w-[75%] rounded-[8px] bg-[#FF5124] text-white hover:bg-[#FF5124]/80 md:m-0"
            disabled={
              !name ||
              !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ||
              isNaN(Number(nim)) ||
              !nim ||
              !feedback ||
              !testimoni
            }
            onClick={() => {
              try {
                appendSpreadsheet(
                  {
                    Date: new Date().toLocaleString('en-US', {
                      timeZone: 'Asia/Jakarta'
                    }),
                    Email_Binus: email,
                    Feedback: feedback,
                    Nama: name,
                    NIM: nim,
                    Testimoni: testimoni
                  },
                  process.env.NODE_ENV === 'production' ? 1 : 0
                );
                toast({ title: 'Feedback successful! Thank you for making dimyum better!', className: 'bg-white' });
              } catch (e) {
                toast({ title: 'Server Error! Feedback not submitted!', variant: 'destructive' });
              }
            }}
          >
            SUBMIT
          </Button>
        </div>

        <div className="flex w-[100%] flex-col gap-8 md:w-[40%]">
          <p className="text-center font-integralbold text-4xl font-black md:text-start">CONTACT INFORMATION</p>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-xl">EMAIL ADDRESS</p>
            <p className="text-xl font-bold text-[#FF5124]">dimyum@gmail.com</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className=" text-xl">PHONE NUMBER</p>
            <p className="text-xl font-bold text-[#FF5124]">+62-818-178-545</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
