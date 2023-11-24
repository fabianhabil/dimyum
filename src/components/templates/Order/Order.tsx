/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Icons } from '@/components/icons/icons';
import { Button } from '@/components/ui/button/button';
import { Checkbox } from '@/components/ui/checkbox/checkbox';
import { cn } from '@/lib/utils';
import type { DimsumOrderType } from '@/types/dimsum';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Order = () => {
  const [stepper, setStepper] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [dimsumOrder, setDimsumOrder] = useState<DimsumOrderType>({
    beef: { name: 'Beef', count: 0 },
    carrot: { name: 'Carrot', count: 0 },
    crabStick: { name: 'Crab Stick', count: 0 },
    mushroom: { name: 'Mushroom', count: 0 },
    shrimp: { name: 'Shrimp', count: 0 }
  });
  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);
  const [mentai, setMentai] = useState<boolean>(false);
  const [mayo, setMayo] = useState<boolean>(false);
  const [cheese, setCheese] = useState<boolean>(false);
  const [chili, setChili] = useState<boolean>(false);

  const router = useRouter();

  return (
    <>
      {stepper === 0 ? (
        <div className="container flex h-[91vh] flex-col justify-center gap-8">
          <p className="text-center font-integralbold text-4xl">Choose the Quantity of Dimsum</p>
          <div className="flex flex-row items-center justify-center gap-4">
            <div
              className={cn(
                'flex h-auto min-h-[200px] w-full max-w-[500px] flex-col items-center justify-center gap-4 rounded-[14px] bg-[#D9D9D9] p-4 hover:cursor-pointer sm:h-[300px] md:h-[500px]',
                quantity === 4 && 'border-2 border-blue-500'
              )}
              onClick={() => setQuantity(() => 4)}
            >
              <p className="text-center font-montserrat text-4xl font-bold">4 PCS</p>
              <Image
                src="/dimsum/4pcs.png"
                alt="dimsum"
                height={0}
                width={0}
                sizes="100%"
                className="h-auto w-full md:w-[75%]"
              />
            </div>
            <div
              className={cn(
                'flex h-auto min-h-[200px] w-full max-w-[500px] flex-col items-center justify-center gap-4 rounded-[14px] bg-[#D9D9D9] p-4 hover:cursor-pointer sm:h-[300px] md:h-[500px]',
                quantity === 6 && 'border-2 border-blue-500'
              )}
              onClick={() => setQuantity(() => 6)}
            >
              <p className="text-center font-montserrat text-4xl font-bold">6 PCS</p>
              <Image
                src="/dimsum/6pcs.png"
                alt="dimsum"
                height={0}
                width={0}
                sizes="100%"
                className="h-auto w-full md:w-[75%]"
              />
            </div>
          </div>
          <Button
            className="mx-auto w-full max-w-[1015px] rounded-[16px] bg-[#000000] py-6 text-xl font-bold uppercase text-white hover:bg-[#000000]/80"
            disabled={quantity === 0}
            onClick={() => setStepper(() => 1)}
          >
            next
          </Button>
        </div>
      ) : null}

      {stepper === 1 ? (
        <div className="container flex min-h-[91vh] flex-col justify-center gap-8 py-4">
          <div className="flex w-full flex-row items-center justify-between">
            <Button
              variant={'link'}
              className="m-0 p-0"
              onClick={() => {
                setStepper(() => 0);
                setDimsumOrder({
                  beef: { name: 'Beef', count: 0 },
                  carrot: { name: 'Carrot', count: 0 },
                  crabStick: { name: 'Crab Stick', count: 0 },
                  mushroom: { name: 'Mushroom', count: 0 },
                  shrimp: { name: 'Shrimp', count: 0 }
                });
                setSelectedQuantity(() => 0);
              }}
            >
              <Icons.leftArrow size={32} />
            </Button>
            <p className="my-4 text-center font-integralbold text-[22px] sm:text-2xl md:my-0 md:text-4xl">YOUR ORDER</p>
            <div />
          </div>
          <div className="mx-auto flex flex-col items-center justify-center gap-4 rounded-[14px] bg-[#D9D9D9] p-4 md:w-[60%]">
            {Object.keys(dimsumOrder).map((data, index) => {
              const dimsumData = dimsumOrder[data as keyof DimsumOrderType];
              if (dimsumData.count !== 0) {
                return (
                  <p key={index} className="text-center text-xl font-bold">
                    {dimsumData.count}pcs - {dimsumData.name} Dimsum
                  </p>
                );
              }
              return null;
            })}
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:justify-center">
            <div className="flex flex-col gap-4 md:w-[40%]">
              <p className="text-center font-integralbold text-[22px] sm:text-2xl md:text-4xl">Select Your Toppings</p>
              {Object.keys(dimsumOrder).map((data, index) => {
                const dimsumData = dimsumOrder[data as keyof DimsumOrderType];

                return (
                  <div key={index} className="flex flex-col gap-2">
                    <p className="text-center text-xl font-semibold">{dimsumData.name}</p>
                    <div className="flex flex-row items-center justify-center gap-4">
                      <Button
                        className="bg-red-500 px-4 py-2 text-xl hover:bg-red-500/80"
                        onClick={() => {
                          if (selectedQuantity !== 0 && dimsumOrder[data as keyof DimsumOrderType].count !== 0) {
                            console.log('tes');
                            setDimsumOrder((state) => ({
                              ...state,
                              [data as keyof DimsumOrderType]: {
                                ...state[data as keyof DimsumOrderType],
                                count: state[data as keyof DimsumOrderType].count - 1
                              }
                            }));
                            setSelectedQuantity((state) => state - 1);
                          }
                        }}
                        disabled={selectedQuantity === 0 || dimsumOrder[data as keyof DimsumOrderType].count === 0}
                      >
                        -
                      </Button>
                      <p className="text-xl font-semibold">{dimsumData.count}</p>
                      <Button
                        className="bg-green-500 px-4 py-2 text-xl hover:bg-green-500/80"
                        onClick={() => {
                          if (selectedQuantity !== quantity) {
                            setDimsumOrder((state) => ({
                              ...state,
                              [data as keyof DimsumOrderType]: {
                                ...state[data as keyof DimsumOrderType],
                                count: state[data as keyof DimsumOrderType].count + 1
                              }
                            }));
                            setSelectedQuantity((state) => state + 1);
                          }
                        }}
                        disabled={selectedQuantity === quantity}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-4">
              <p className="my-4 text-center font-integralbold text-[22px] sm:text-2xl md:my-0 md:text-4xl">
                ADD ON SAUCE
              </p>
              <div className="grid grid-cols-2 grid-rows-2 items-center justify-between gap-4 px-4">
                <div className="flex flex-row items-center gap-4 border-2 border-[#E0EC89] p-2">
                  <Checkbox onCheckedChange={(e) => setMentai(e as boolean)} />
                  <p>MENTAI + IDR4.000</p>
                </div>
                <div className="flex flex-row items-center gap-4 border-2 border-[#E0EC89] p-2">
                  <Checkbox onCheckedChange={(e) => setCheese(e as boolean)} />
                  <p>CHEESE + IDR4.000</p>
                </div>
                <div className="flex flex-row items-center gap-4 border-2 border-[#E0EC89] p-2">
                  <Checkbox onCheckedChange={(e) => setMayo(e as boolean)} />
                  <p>MAYO + IDR4.000</p>
                </div>
                <div className="flex flex-row items-center gap-4 border-2 border-[#E0EC89] p-2">
                  <Checkbox onCheckedChange={(e) => setChili(e as boolean)} />
                  <p>CHILI OIL + IDR4.000</p>
                </div>
              </div>
              <Button
                className="mx-auto w-[90%] bg-[#FF5124] px-12 font-semibold hover:bg-[#FF5124]/70"
                onClick={() => setStepper(() => 2)}
                disabled={selectedQuantity !== quantity}
              >
                ORDER
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      {stepper === 2 ? (
        <>
          <div className="container flex min-h-[91vh] flex-col justify-center gap-8 py-4">
            <p className="text-center font-integralbold text-5xl">Thanks for ordering</p>
            <p className="mx-auto w-[80%] text-center text-lg">
              Your order is being send to dimyum staff and processed! will soon be ready for pickup at{' '}
              <span className="font-bold">Binus Festival (Binus Anggrek 2nd Floor)!</span>
            </p>
            <Button
              className="text-center uppercase"
              onClick={() => {
                router.push('/');
              }}
            >
              Back to home page
            </Button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Order;
