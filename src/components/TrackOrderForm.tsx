'use client';

import { useState } from 'react';
import { Search, Package, Clock, CheckCircle2, Music } from 'lucide-react';

interface OrderStatus {
  id: string;
  status: 'received' | 'in_progress' | 'review' | 'completed';
  statusText: string;
  message: string;
}

export default function TrackOrderForm() {
  const [trackingId, setTrackingId] = useState('');
  const [result, setResult] = useState<OrderStatus | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) {
      setError('Please enter your tracking ID');
      return;
    }
    setLoading(true);
    setError('');
    setResult(null);

    // Simulate API call - in production this would call Go High Level API
    setTimeout(() => {
      setLoading(false);
      setError('No order found with that tracking ID. Please check your ID and try again.');
    }, 1500);
  };

  const statusSteps = [
    { key: 'received', label: 'Order Received', icon: Package },
    { key: 'in_progress', label: 'Song Creation', icon: Music },
    { key: 'review', label: 'Quality Review', icon: Clock },
    { key: 'completed', label: 'Delivered', icon: CheckCircle2 },
  ];

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="w-full px-5 py-4 pr-14 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors text-lg"
            placeholder="Enter your tracking ID"
          />
          <button
            type="submit"
            disabled={loading}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-accent text-white rounded-lg flex items-center justify-center hover:bg-accent-hover transition-colors disabled:opacity-50"
          >
            <Search size={18} />
          </button>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>

      {result && (
        <div className="mt-8 bg-bg-light rounded-2xl p-6 border border-border">
          <h3 className="font-semibold text-text-dark mb-4">Order #{result.id}</h3>
          <div className="flex items-center gap-2 mb-6">
            {statusSteps.map((step, i) => {
              const StatusIcon = step.icon;
              const isActive = statusSteps.findIndex(s => s.key === result.status) >= i;
              return (
                <div key={step.key} className="flex items-center gap-2 flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive ? 'bg-accent text-white' : 'bg-gray-200 text-gray-400'}`}>
                    <StatusIcon size={14} />
                  </div>
                  {i < statusSteps.length - 1 && (
                    <div className={`flex-1 h-1 rounded ${isActive ? 'bg-accent' : 'bg-gray-200'}`} />
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-text-dark font-medium">{result.statusText}</p>
          <p className="text-sm text-text-muted mt-1">{result.message}</p>
        </div>
      )}
    </div>
  );
}
