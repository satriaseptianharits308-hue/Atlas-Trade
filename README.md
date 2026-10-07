# ATLAS TRADE — Institutional Performance Desk

An ultra-sleek, professional trading performance system and trade journal designed for prop firm traders, fund managers, and retail trading desks.

## Key Features

1. **Mandatory Master Admin Registration Approval**
   - **Gated Access**: When any new user registers on the website, their account status is set to `PENDING APPROVAL`.
   - **Pending Verification Screen**: The user cannot enter the terminal immediately; they are notified that their account is awaiting review by the Desk Administrator.
   - **Master Admin Approval Desk**:
     - The Master Admin sees a live counter of **Pending Approvals** on the admin desk.
     - Master Admin can grant terminal access with **`✓ Approve`** or decline with **`✕ Decline`**.
     - Once approved, the trader can immediately sign in to their dashboard.

2. **Monthly Daily Performance & Win/Loss Tracking**
   - **Day-by-Day Analysis**: See whether your trading days throughout the month were **PROFIT** (green), **LOSS** (red), or **BREAK EVEN** (amber).
   - **Monthly Statistics**: Green days vs red days count, profitable day win rate %, and best day realized P&L.
   - **Motto of Consistency**: Prominently features the golden emblem and reminder:
     > **"DISCIPLINE IS YOUR CROWN"**
     > *Daily consistency beats sporadic luck • Protect your crown every single day*

3. **Bulk Actions in Trade Journal**
   - Select multiple trade positions with checkboxes or "Select All".
   - **Change Status Simultaneously**: Batch update all selected trades to `PROFIT`, `LOSS`, `BREAK EVEN` (zeros P&L automatically), or `OPEN`.
   - **Bulk Delete**: Permanently delete multiple trade executions at once with confirmation.

4. **Lot Size Execution Management**
   - R:R has been replaced with actual **Lot Size** (Lots).
   - Enter lot size per execution (e.g. `1.00 Lot`, `0.50 Lot`, `2.50 Lots`).
   - Track **Total Lots Traded** and **Average Lot Size** in the dashboard and analytics.

5. **Multi-Account Isolation & Account Deletion**
   - **Strict Account Isolation**: Every trading account maintains its own completely independent trade journal, metrics, equity curve, and daily performance calendar.
   - **Account Deletion**: Delete unused trading accounts and their associated trades with a single click.
   - **Account Switcher**: Switch smoothly between accounts (Apex 150K, FTMO Challenge, Personal Broker, etc.) with instant recalculation.

6. **Discrete Master Admin Desk**
   - **Completely Hidden & Private**: There is zero public mention or footprint of the Master Admin role anywhere on the login screen or regular trader views.
   - **Full Platform Oversight**: When the Master Admin authenticates, the exclusive Master Admin Desk unlocks.
   - **Cross-Trader Monitoring & Inspection**: Monitor all registered traders and their live desks.
   - **Trader Account Deletion & Suspension**: Master Admin can permanently delete or suspend rogue trader accounts.

7. **Interactive Trade Status Workflow**
   - Change individual trade status anytime directly from the journal table:
     - `PROFIT` (Wins)
     - `LOSS` (Losses)
     - `BREAK EVEN` (Zeros P&L to $0.00 automatically)
     - `OPEN` (Live position)

8. **Institutional English Interface**
   - 100% in native English.
   - Multi-currency support: USD ($), EUR (€), GBP (£), IDR (Rp).

## Quick Start

Open `index.html` directly in your browser or run a local server:
```bash
python3 -m http.server 4173
```
Then visit `http://localhost:4173`.
