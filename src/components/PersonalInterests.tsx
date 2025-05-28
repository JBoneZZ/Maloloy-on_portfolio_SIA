
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const PersonalInterests = () => {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center space-x-2">
          <Heart className="w-5 h-5" />
          <span>Personal Interests</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-gray-700 leading-relaxed">
          My personal interests are playing video games, sim racing, cars/vehicles, and collecting toy cars.
        </p>
      </CardContent>
    </Card>
  );
};

export default PersonalInterests;
