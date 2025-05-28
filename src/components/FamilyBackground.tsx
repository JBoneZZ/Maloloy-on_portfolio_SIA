
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';

const FamilyBackground = () => {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center space-x-2">
          <Users className="w-5 h-5" />
          <span>Family Background</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-gray-700 leading-relaxed">
          I have 2 siblings and an OFW father and a housewife mother.
        </p>
      </CardContent>
    </Card>
  );
};

export default FamilyBackground;
