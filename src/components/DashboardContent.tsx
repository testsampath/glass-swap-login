import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  CreditCard, 
  PiggyBank, 
  TrendingUp,
  Eye,
  EyeOff
} from "lucide-react";
import { useState } from "react";

export function DashboardContent() {
  const [showBalance, setShowBalance] = useState(true);

  const accounts = [
    { name: "Checking Account", number: "****1234", balance: 5420.50, type: "checking" },
    { name: "Savings Account", number: "****5678", balance: 12840.75, type: "savings" },
    { name: "Credit Card", number: "****9012", balance: -1250.00, type: "credit" },
  ];

  const recentTransactions = [
    { id: 1, description: "Salary Deposit", amount: 3500.00, date: "Today", type: "credit" },
    { id: 2, description: "Grocery Store", amount: -89.45, date: "Yesterday", type: "debit" },
    { id: 3, description: "Online Transfer", amount: -500.00, date: "2 days ago", type: "debit" },
    { id: 4, description: "Interest Payment", amount: 25.30, date: "3 days ago", type: "credit" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, John</h1>
          <p className="text-muted-foreground">Here's your financial overview</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          Quick Transfer
        </Button>
      </div>

      {/* Account Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {accounts.map((account, index) => (
          <Card key={index} className="bg-card/40 backdrop-blur-xl border-border/50 hover:bg-card/60 transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {account.name}
              </CardTitle>
              {account.type === "checking" && <CreditCard className="h-4 w-4 text-muted-foreground" />}
              {account.type === "savings" && <PiggyBank className="h-4 w-4 text-muted-foreground" />}
              {account.type === "credit" && <TrendingUp className="h-4 w-4 text-muted-foreground" />}
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">
                    {showBalance ? (
                      `$${Math.abs(account.balance).toLocaleString('en-US', { minimumFractionDigits: 2 })}`
                    ) : (
                      "••••••"
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {account.number}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowBalance(!showBalance)}
                  className="hover:bg-accent/50"
                >
                  {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              {account.balance < 0 && (
                <Badge variant="destructive" className="mt-2">
                  Payment Due
                </Badge>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="bg-card/40 backdrop-blur-xl border-border/50">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex flex-col gap-2 border-border/30 hover:bg-accent/50">
              <ArrowUpRight className="h-5 w-5" />
              Send Money
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2 border-border/30 hover:bg-accent/50">
              <ArrowDownLeft className="h-5 w-5" />
              Request Money
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2 border-border/30 hover:bg-accent/50">
              <CreditCard className="h-5 w-5" />
              Pay Bills
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2 border-border/30 hover:bg-accent/50">
              <PiggyBank className="h-5 w-5" />
              Save Goals
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card className="bg-card/40 backdrop-blur-xl border-border/50">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Transactions</CardTitle>
          <Button variant="ghost" className="hover:bg-accent/50">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === "credit" 
                      ? "bg-green-500/20 text-green-500" 
                      : "bg-red-500/20 text-red-500"
                  }`}>
                    {transaction.type === "credit" ? (
                      <ArrowDownLeft className="h-4 w-4" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
                <div className={`font-bold ${
                  transaction.amount > 0 ? "text-green-500" : "text-red-500"
                }`}>
                  {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}