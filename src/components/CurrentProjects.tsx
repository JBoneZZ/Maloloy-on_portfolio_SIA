
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

const CurrentProjects = () => {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center space-x-2">
          <Wrench className="w-5 h-5" />
          <span>Projects You Are Still Working On</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-gray-700 leading-relaxed">
          The project I'm working on for now is making a racing game. My current progress is making the car drivable.
        </p>
      </CardContent>
    </Card>
  );
};

export default CurrentProjects;
