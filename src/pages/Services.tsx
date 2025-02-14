import React from 'react';
import { Zap, Activity, PenTool as Tool, Settings, Cable, Power } from 'lucide-react';

const services = [
  {
    title: 'Transformer Services',
    description: [
      'Porcelain bushing, Epoxy Bushing, Condenser bushing',
      'Buchholz Relay (GOR-1, GOR-2, GOR-3)',
      'PRV (T3 and T6 Type)',
      'Winding temperature indicator',
      'Oil temperature indicator',
      'AVR/RTCC Panel/OLTC all type Spare',
      'Marshalling Box'
    ],
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Testing & Commissioning',
    description: [
      'Testing & commissioning of switchyards up to 400 KV',
      'Testing & commissioning of EHV breaker up to 400 KV',
      'CT-PT Testing',
      'Relay Testing',
      'Earth pit-grid resistance measurement'
    ],
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Maintenance Services',
    description: [
      'Transformer loading/unloading, Erection, Testing',
      'Transformer Overhauling/transformer spare',
      'HT-LT electrical switchgear',
      'Breaker servicing',
      'Switch yard maintenance'
    ],
    icon: Tool,
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Retrofitting Services',
    description: [
      'Retrofitting of relays and circuit breakers',
      'LT & HT ACB, VCB, SF6 equipment',
      'Sub Station Equipment',
      'Protection Relay Testing',
      'Relay Panel Retrofit jobs'
    ],
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Cable Services',
    description: [
      'Cable jointing',
      'Cable fault location',
      'Testing & checking of systems as per drawings',
      'Supply & installation of transformers',
      'Supply & installation of circuit breakers'
    ],
    icon: Cable,
    image: 'https://images.unsplash.com/photo-1601814933824-fd0b574dd592?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Project Work',
    description: [
      'ARC - AMC related job',
      'Shutdown maintenance jobs',
      'RTCC - OLTC Service',
      'Master follower issue resolution',
      'Complete project management'
    ],
    icon: Power,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Services() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16 text-primary">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <ul className="space-y-2">
                  {service.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}