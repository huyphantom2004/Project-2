import { useState, FormEvent } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Calendar, Users, Search } from "lucide-react";

const HeroSection = () => {
  const [destination, setDestination] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [travelers, setTravelers] = useState("1");
  const [_, setLocation] = useLocation();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    // Build query string for search
    const searchParams = new URLSearchParams();
    if (destination) searchParams.set("destination", destination);
    if (dateRange) searchParams.set("dates", dateRange);
    if (travelers) searchParams.set("travelers", travelers);

    // Navigate to tours page with search params
    setLocation(`/tours?${searchParams.toString()}`);
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 h-96 md:h-[32rem]">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=600&q=80"
          alt="Điểm đến du lịch"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="container mx-auto px-4 relative h-full">
        <div className="flex flex-col justify-center h-full max-w-3xl">
          {" "}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-poppins mb-4">
            Khám Phá Những Tour Du Lịch Tuyệt Vời Trên Thế Giới
          </h1>
          <p className="text-lg md:text-xl text-white opacity-90 mb-8">
            Khám phá những điểm đến độc đáo với những trải nghiệm du lịch được
            tuyển chọn của chúng tôi
          </p>
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-xl">
            <form
              onSubmit={handleSearch}
              className="flex flex-col md:flex-row gap-4"
            >
              <div className="flex-1">
                {" "}
                <label
                  htmlFor="destination"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Điểm đến
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="destination"
                    className="pl-10"
                    placeholder="Bạn muốn đi đâu?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex-1 md:w-40">
                {" "}
                <label
                  htmlFor="daterange"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Ngày
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="daterange"
                    className="pl-10"
                    placeholder="Chọn ngày"
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex-1 md:w-36">
                <label
                  htmlFor="travelers"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Khách
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
                  <Select value={travelers} onValueChange={setTravelers}>
                    <SelectTrigger id="travelers" className="pl-10">
                      <SelectValue placeholder="Chọn số khách" />
                    </SelectTrigger>
                    <SelectContent>
                      {" "}
                      <SelectItem value="1">1 Người lớn</SelectItem>
                      <SelectItem value="2">2 Người lớn</SelectItem>
                      <SelectItem value="3">3 Người lớn</SelectItem>
                      <SelectItem value="4">4+ Người lớn</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="md:self-end">
                <Button type="submit" className="w-full md:mt-6">
                  <Search className="h-4 w-4 mr-2" />
                  Tìm kiếm
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
