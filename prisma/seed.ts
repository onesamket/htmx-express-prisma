import { prisma } from "./prisma";

// Seed data for the Todo model
const todoItems = {
  todos: [
    {
      title: "Complete Project A",
      content: "Finish all tasks related to Project A",
      is_complated: false,
    },
    {
      title: "Meeting with Team",
      content: "Discuss upcoming plans and goals with the team",
      is_complated: false,
    },
    {
      title: "Read Book",
      content: "Read 'Principles' by Ray Dalio",
      is_complated: true,
    },
    {
      title: "Exercise",
      content: "Go for a 30-minute jog in the park",
      is_complated: false,
    },
    {
      title: "Grocery Shopping",
      content: "Buy fruits, vegetables, and other essentials",
      is_complated: true,
    },
  ],
};

async function seed() {
  console.log("seeding your sample todos...");
  try {
    for (const todo of todoItems.todos) {
      await prisma.todo.create({
        data: todo,
      });
    }

    console.log("Seed data inserted successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed().then(() => prisma.$disconnect());
