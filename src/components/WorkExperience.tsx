
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const WorkExperience = () => {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center space-x-2">
          <Briefcase className="w-5 h-5" />
          <span>Prior Work Experience</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-gray-700 leading-relaxed">
          My work experience is helping my parents farm corn, coconut, and bananas in our highlands.
        </p>
      </CardContent>
    </Card>
  );
};

export default WorkExperience;
