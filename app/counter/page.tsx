"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type HistoryItem = {
  id: number;
  expression: string;
  result: number | string;
};

export default function CounterPage() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState<number | string>(0);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const first = Number(num1);
  const second = Number(num2);

  const addToHistory = (expression: string, answer: number | string) => {
    const newItem: HistoryItem = {
      id: Date.now(),
      expression,
      result: answer,
    };

    setHistory((prev) => [newItem, ...prev]);
    setResult(answer);
  };

  const handleAdd = () => {
    addToHistory(`${first} + ${second}`, first + second);
  };

  const handleSubtract = () => {
    addToHistory(`${first} - ${second}`, first - second);
  };

  const handleMultiply = () => {
    addToHistory(`${first} × ${second}`, first * second);
  };

  const handleDivide = () => {
    if (second === 0) {
      addToHistory(`${first} ÷ ${second}`, "Tak boleh bahagi dengan 0");
      return;
    }

    addToHistory(`${first} ÷ ${second}`, first / second);
  };

  const handleClearInputs = () => {
    setNum1("");
    setNum2("");
    setResult(0);
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8">
      <section className="mx-auto max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Calculator Page</h1>
            <p className="text-slate-600">
              Masukkan dua nombor dan buat operasi matematik.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm space-y-4">
            <Input
              type="number"
              placeholder="Masukkan nombor pertama"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
            />

            <Input
              type="number"
              placeholder="Masukkan nombor kedua"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button onClick={handleAdd}>+</Button>
              <Button onClick={handleSubtract} variant="outline">
                -
              </Button>
              <Button onClick={handleMultiply} variant="secondary">
                x
              </Button>
              <Button onClick={handleDivide} variant="destructive">
                /
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Button onClick={handleClearInputs} className="w-full">
                Clear Input
              </Button>
              <Button
                onClick={handleClearHistory}
                variant="outline"
                className="w-full"
              >
                Clear History
              </Button>
            </div>

            <div className="rounded-xl bg-slate-100 p-4">
              <p className="text-sm text-slate-600">Result</p>
              <p className="text-2xl font-bold">{result}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">History</h2>
            <span className="text-sm text-slate-500">
              {history.length} item
            </span>
          </div>

          {history.length === 0 ? (
            <p className="text-slate-500">Belum ada kiraan lagi.</p>
          ) : (
            <div className="space-y-3 max-h-[500px] overflow-y-auto">
              {history.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border bg-slate-50 p-4"
                >
                  <p className="text-sm text-slate-600">{item.expression}</p>
                  <p className="text-lg font-semibold">= {item.result}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}