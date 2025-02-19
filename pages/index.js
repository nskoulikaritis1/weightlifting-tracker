import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(() => {
    console.log('Service Worker Registered');
  });
}

export default function WeightliftingTracker() {
  const [records, setRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({ date: "", arase: "", epolezete: "", frontSquat: "", backSquat: "" });

  useEffect(() => {
    const storedRecords = localStorage.getItem("weightliftingRecords");
    if (storedRecords) {
      setRecords(JSON.parse(storedRecords));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("weightliftingRecords", JSON.stringify(records));
  }, [records]);

  const addRecord = () => {
    if (newRecord.date && newRecord.arase && newRecord.epolezete && newRecord.frontSquat && newRecord.backSquat) {
      setRecords([...records, newRecord]);
      setNewRecord({ date: "", arase: "", epolezete: "", frontSquat: "", backSquat: "" });
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Weightlifting Tracker</h1>
      <Card className="mb-4 p-4">
        <h2 className="text-lg font-semibold">Προσθήκη νέου ρεκόρ</h2>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <Input placeholder="Ημερομηνία" value={newRecord.date} onChange={(e) => setNewRecord({ ...newRecord, date: e.target.value })} />
          <Input placeholder="Αρασέ" value={newRecord.arase} onChange={(e) => setNewRecord({ ...newRecord, arase: e.target.value })} />
          <Input placeholder="Επολέ Ζετε" value={newRecord.epolezete} onChange={(e) => setNewRecord({ ...newRecord, epolezete: e.target.value })} />
          <Input placeholder="Μπροστινά Πόδια" value={newRecord.frontSquat} onChange={(e) => setNewRecord({ ...newRecord, frontSquat: e.target.value })} />
          <Input placeholder="Πίσω Πόδια" value={newRecord.backSquat} onChange={(e) => setNewRecord({ ...newRecord, backSquat: e.target.value })} />
        </div>
        <Button className="mt-4" onClick={addRecord}>Προσθήκη</Button>
      </Card>
    </div>
  );
}