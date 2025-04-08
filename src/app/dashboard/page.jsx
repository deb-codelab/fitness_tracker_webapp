"use client";

import { Card, ProgressBar } from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Container, Row, Col } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Flame, Clock, Footprints, Bed } from "lucide-react";
import "react-circular-progressbar/dist/styles.css";

const workoutData = [
  { date: "Apr 1", duration: 30, calories: 250, steps: 4000, sleep: 6 },
  { date: "Apr 2", duration: 45, calories: 400, steps: 6000, sleep: 7 },
  { date: "Apr 3", duration: 60, calories: 500, steps: 8000, sleep: 7.5 },
  { date: "Apr 4", duration: 40, calories: 350, steps: 7000, sleep: 6.5 },
  { date: "Apr 5", duration: 50, calories: 450, steps: 7500, sleep: 8 },
];

const dailyDurationGoal = 60;
const dailyCaloriesGoal = 500;
const dailyStepsGoal = 10000;
const dailySleepGoal = 8;

const todayWorkout = workoutData[workoutData.length - 1];
const todayDurationProgress = Math.min((todayWorkout.duration / dailyDurationGoal) * 100, 100);
const todayCaloriesProgress = Math.min((todayWorkout.calories / dailyCaloriesGoal) * 100, 100);
const todayStepsProgress = Math.min((todayWorkout.steps / dailyStepsGoal) * 100, 100);
const todaySleepProgress = Math.min((todayWorkout.sleep / dailySleepGoal) * 100, 100);

const weeklyDurationGoal = 300;
const weeklyCaloriesGoal = 2000;
const weeklyStepsGoal = 50000;
const weeklySleepGoal = 56;

const totalDuration = workoutData.reduce((sum, entry) => sum + entry.duration, 0);
const totalCalories = workoutData.reduce((sum, entry) => sum + entry.calories, 0);
const totalSteps = workoutData.reduce((sum, entry) => sum + entry.steps, 0);
const totalSleep = workoutData.reduce((sum, entry) => sum + entry.sleep, 0);

const weeklyDurationProgress = Math.min((totalDuration / weeklyDurationGoal) * 100, 100);
const weeklyCaloriesProgress = Math.min((totalCalories / weeklyCaloriesGoal) * 100, 100);
const weeklyStepsProgress = Math.min((totalSteps / weeklyStepsGoal) * 100, 100);
const weeklySleepProgress = Math.min((totalSleep / weeklySleepGoal) * 100, 100);

export default function WorkoutDashboard() {
  return (
    <Container className="py-1">

      {/* Daily Goals Section */}
      <h4 className="text-secondary fw-semibold mb-3">Daily Goals</h4>
      <Row className="g-4 mb-5">
        {[{
          icon: <Clock size={16} className="me-2" />, label: "Duration", value: todayWorkout.duration + " mins today", progress: todayDurationProgress, color: "#4e79a7"
        }, {
          icon: <Flame size={16} className="me-2" />, label: "Calories", value: todayWorkout.calories + " kcal today", progress: todayCaloriesProgress, color: "#f28e2b"
        }, {
          icon: <Footprints size={16} className="me-2" />, label: "Steps", value: todayWorkout.steps + " steps today", progress: todayStepsProgress, color: "#59a14f"
        }, {
          icon: <Bed size={16} className="me-2" />, label: "Sleep", value: todayWorkout.sleep + " hrs today", progress: todaySleepProgress, color: "#8e6c8a"
        }].map((goal, i) => (
          <Col md={3} key={i}>
            <Card className="rounded-1 shadow-sm p-3 border bg-dark text-white d-flex flex-row align-items-center" style={{ backgroundColor: '#353535' }}>
              <div style={{ width: 80 }}>
                <CircularProgressbar
                  value={goal.progress}
                  text={`${Math.round(goal.progress)}%`}
                  styles={buildStyles({ textColor: goal.color, pathColor: goal.color, trailColor: "#e9ecef" })}
                />
              </div>
              <div className="ms-3">
                <h6 className="mb-1 text-white">{goal.icon}{goal.label}</h6>
                <p className="mb-0 small text-white-50">{goal.value}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Weekly Goals Section */}
      <h4 className="text-secondary fw-semibold mb-3">Weekly Goals</h4>
      <Row className="g-4 mb-5">
        {[{
          icon: <Clock size={16} className="me-2" />, label: "Duration", value: `${totalDuration} / ${weeklyDurationGoal} mins`, progress: weeklyDurationProgress, color: "#4e79a7"
        }, {
          icon: <Flame size={16} className="me-2" />, label: "Calories", value: `${totalCalories} / ${weeklyCaloriesGoal} kcal`, progress: weeklyCaloriesProgress, color: "#f28e2b"
        }, {
          icon: <Footprints size={16} className="me-2" />, label: "Steps", value: `${totalSteps} / ${weeklyStepsGoal} steps`, progress: weeklyStepsProgress, color: "#59a14f"
        }, {
          icon: <Bed size={16} className="me-2" />, label: "Sleep", value: `${totalSleep} / ${weeklySleepGoal} hrs`, progress: weeklySleepProgress, color: "#8e6c8a"
        }].map((goal, i) => (
          <Col md={3} key={i}>
            <Card className="rounded-1 shadow-sm p-3 border bg-dark text-white d-flex flex-row align-items-center" style={{ backgroundColor: '#353535' }}>
              <div style={{ width: 80 }}>
                <CircularProgressbar
                  value={goal.progress}
                  text={`${Math.round(goal.progress)}%`}
                  styles={buildStyles({ textColor: goal.color, pathColor: goal.color, trailColor: "#e9ecef" })}
                />
              </div>
              <div className="ms-3">
                <h6 className="mb-1 text-white">{goal.icon}{goal.label}</h6>
                <p className="mb-0 small text-white-50">{goal.value}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Charts Section */}
      <h4 className="text-secondary fw-semibold mb-3">Workout Trends</h4>
      <Row className="g-4">
        <Col md={6}>
          <Card className="rounded-1 shadow-sm p-4 border bg-white">
            <h5 className="mb-3 text-secondary">Workout Duration</h5>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={workoutData}>
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="duration" stroke="#0d6efd" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="rounded-1 shadow-sm p-4 border bg-white">
            <h5 className="mb-3 text-secondary">Calories Burned</h5>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={workoutData}>
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="calories" fill="#f28e2b" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}