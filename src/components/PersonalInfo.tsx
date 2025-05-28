
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Calendar, MapPin } from 'lucide-react';

const PersonalInfo = () => {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center space-x-2">
          <User className="w-5 h-5" />
          <span>Personal Information</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <User className="w-5 h-5 text-blue-600" />
            <div>
              <p className="font-semibold text-gray-700">Name</p>
              <p className="text-gray-900">Jerahmel Jade J. Maloloy-on</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-blue-600" />
            <div>
              <p className="font-semibold text-gray-700">Date of Birth</p>
              <p className="text-gray-900">September 13, 2004</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-blue-600" />
            <div>
              <p className="font-semibold text-gray-700">Location</p>
              <p className="text-gray-900">Cagayan de Oro</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInfo;
