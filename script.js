// ================= ATLAS TRADE ENGINE =================
// Institutional Performance System & Master Admin Desk

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

// Master Admin Definition
const MASTER_ADMIN_EMAIL = 'satriatrader1@gmail.com';
const MASTER_ADMIN_PASS = 'satria308';

// Default User DB Seed
const DEFAULT_USERS_DB = {
  [MASTER_ADMIN_EMAIL]: {
    email: MASTER_ADMIN_EMAIL,
    password: MASTER_ADMIN_PASS,
    name: 'Satria (Master Admin)',
    role: 'admin',
    status: 'approved',
    createdAt: '2026-10-01',
    activeAccountId: 'acc-satria-1',
    accounts: [
      { id: 'acc-satria-1', name: 'Apex 150K Funded (Master)', type: 'Prop Firm Funded' },
      { id: 'acc-satria-2', name: 'Topstep 100K Express', type: 'Prop Firm Challenge' }
    ],
    trades: [
      { id: 'tr-sat-1', accountId: 'acc-satria-1', date: '2026-10-01', pair: 'XAUUSD', side: 'BUY', lot: 2.00, entry: 2642.50, exit: 2665.20, pl: 2270.00, status: 'PROFIT', notes: 'London breakout continuation' },
      { id: 'tr-sat-2', accountId: 'acc-satria-1', date: '2026-10-02', pair: 'NAS100', side: 'SELL', lot: 1.50, entry: 20120.00, exit: 20180.00, pl: -450.00, status: 'LOSS', notes: 'Choppy session stop out' },
      { id: 'tr-sat-3', accountId: 'acc-satria-1', date: '2026-10-03', pair: 'EURUSD', side: 'BUY', lot: 3.00, entry: 1.0850, exit: 1.0850, pl: 0.00, status: 'BREAK EVEN', notes: 'Risk off before NFP release' },
      { id: 'tr-sat-4', accountId: 'acc-satria-1', date: '2026-10-04', pair: 'XAUUSD', side: 'BUY', lot: 2.50, entry: 2655.00, exit: 2682.40, pl: 3425.00, status: 'PROFIT', notes: 'NY session expansion' },
      { id: 'tr-sat-5', accountId: 'acc-satria-1', date: '2026-10-07', pair: 'BTCUSDT', side: 'BUY', lot: 1.00, entry: 64100.00, exit: 65800.00, pl: 1700.00, status: 'PROFIT', notes: 'Breakout above weekly resistance' },
      { id: 'tr-sat-6', accountId: 'acc-satria-2', date: '2026-10-05', pair: 'US30', side: 'SELL', lot: 1.00, entry: 42200.00, exit: 42050.00, pl: 750.00, status: 'PROFIT', notes: 'Key level rejection' },
      { id: 'tr-sat-7', accountId: 'acc-satria-2', date: '2026-10-06', pair: 'XAUUSD', side: 'SELL', lot: 1.50, entry: 2680.00, exit: 2690.00, pl: -600.00, status: 'LOSS', notes: 'Failed breakdown' }
    ]
  },
  'alex.turner@alphatrading.com': {
    email: 'alex.turner@alphatrading.com',
    password: 'password123',
    name: 'Alex Turner',
    role: 'trader',
    status: 'approved',
    createdAt: '2026-10-02',
    activeAccountId: 'acc-alex-1',
    accounts: [
      { id: 'acc-alex-1', name: 'FTMO 100K Funded', type: 'Prop Firm Funded' },
      { id: 'acc-alex-2', name: 'Personal Swing Account', type: 'Live Personal Broker' }
    ],
    trades: [
      { id: 'tr-al-1', accountId: 'acc-alex-1', date: '2026-10-01', pair: 'EURUSD', side: 'BUY', lot: 2.00, entry: 1.0840, exit: 1.0890, pl: 1000.00, status: 'PROFIT', notes: 'Daily support bounce' },
      { id: 'tr-al-2', accountId: 'acc-alex-1', date: '2026-10-02', pair: 'GBPUSD', side: 'BUY', lot: 2.00, entry: 1.3020, exit: 1.3000, pl: -400.00, status: 'LOSS', notes: 'London stop run' },
      { id: 'tr-al-3', accountId: 'acc-alex-1', date: '2026-10-04', pair: 'XAUUSD', side: 'SELL', lot: 1.50, entry: 2660.00, exit: 2640.00, pl: 1500.00, status: 'PROFIT', notes: '4H orderblock mitigation' },
      { id: 'tr-al-4', accountId: 'acc-alex-1', date: '2026-10-05', pair: 'NAS100', side: 'BUY', lot: 1.00, entry: 20100.00, exit: 20100.00, pl: 0.00, status: 'BREAK EVEN', notes: 'Secured at BE' }
    ]
  },
  'david.chen@propcapital.io': {
    email: 'david.chen@propcapital.io',
    password: 'password123',
    name: 'David Chen',
    role: 'trader',
    status: 'approved',
    createdAt: '2026-10-03',
    activeAccountId: 'acc-dav-1',
    accounts: [
      { id: 'acc-dav-1', name: 'Apex 50K Prop Challenge', type: 'Prop Firm Challenge' }
    ],
    trades: [
      { id: 'tr-dv-1', accountId: 'acc-dav-1', date: '2026-10-02', pair: 'US30', side: 'SELL', lot: 1.00, entry: 42150.00, exit: 42300.00, pl: -750.00, status: 'LOSS', notes: 'Overnight hold loss' },
      { id: 'tr-dv-2', accountId: 'acc-dav-1', date: '2026-10-04', pair: 'NAS100', side: 'BUY', lot: 0.80, entry: 20050.00, exit: 20110.00, pl: 480.00, status: 'PROFIT', notes: 'NY open scalp' },
      { id: 'tr-dv-3', accountId: 'acc-dav-1', date: '2026-10-06', pair: 'XAUUSD', side: 'BUY', lot: 1.00, entry: 2650.00, exit: 2645.00, pl: -250.00, status: 'LOSS', notes: 'Slipped stop' }
    ]
  },
  'sarah.miller@forexdesk.com': {
    email: 'sarah.miller@forexdesk.com',
    password: 'password123',
    name: 'Sarah Miller',
    role: 'trader',
    status: 'approved',
    createdAt: '2026-10-04',
    activeAccountId: 'acc-sar-1',
    accounts: [
      { id: 'acc-sar-1', name: 'The5ers 60K High Stakes', type: 'Prop Firm Funded' }
    ],
    trades: [
      { id: 'tr-sr-1', accountId: 'acc-sar-1', date: '2026-10-01', pair: 'XAUUSD', side: 'BUY', lot: 2.00, entry: 2640.00, exit: 2670.00, pl: 3000.00, status: 'PROFIT', notes: 'Weekly trend following' },
      { id: 'tr-sr-2', accountId: 'acc-sar-1', date: '2026-10-03', pair: 'EURUSD', side: 'SELL', lot: 2.50, entry: 1.0880, exit: 1.0820, pl: 1500.00, status: 'PROFIT', notes: 'ECB speech reaction' },
      { id: 'tr-sr-3', accountId: 'acc-sar-1', date: '2026-10-05', pair: 'GBPUSD', side: 'SELL', lot: 2.00, entry: 1.3050, exit: 1.3050, pl: 0.00, status: 'BREAK EVEN', notes: 'Protected capital' }
    ]
  },
  // Sample Pending Trader awaiting Master Admin approval
  'marcus.vance@hedgefund.com': {
    email: 'marcus.vance@hedgefund.com',
    password: 'password123',
    name: 'Marcus Vance',
    role: 'trader',
    status: 'pending',
    createdAt: '2026-10-06',
    activeAccountId: 'acc-mar-1',
    accounts: [
      { id: 'acc-mar-1', name: 'Evaluation 50K Desk', type: 'Prop Firm Challenge' }
    ],
    trades: []
  }
};

// Global App State
let appState = {
  currency: localStorage.getItem('atlas_currency') || 'USD',
  theme: localStorage.getItem('atlas_theme') || 'dark',
  currentUserEmail: null,
  inspectingUserEmail: null, // When Master Admin inspects another trader
  activeAccountId: null,
  calDate: new Date(),
  filterStatus: 'ALL',
  filterSearch: '',
  adminSearch: '',
  selectedTradeIds: new Set()
};

// ================= STORAGE / DATABASE ENGINE =================
function getUsersDB() {
  const data = localStorage.getItem('atlas_users_db');
  if (data) {
    try {
      const parsed = JSON.parse(data);
      // Ensure Master Admin exists
      if (!parsed[MASTER_ADMIN_EMAIL]) {
        parsed[MASTER_ADMIN_EMAIL] = DEFAULT_USERS_DB[MASTER_ADMIN_EMAIL];
        localStorage.setItem('atlas_users_db', JSON.stringify(parsed));
      }
      return parsed;
    } catch (e) {
      console.error(e);
    }
  }
  localStorage.setItem('atlas_users_db', JSON.stringify(DEFAULT_USERS_DB));
  return DEFAULT_USERS_DB;
}

function saveUsersDB(db) {
  localStorage.setItem('atlas_users_db', JSON.stringify(db));
}

function getCurrentUser() {
  const db = getUsersDB();
  // If inspecting another user as admin, return the inspected user
  const emailToLookup = appState.inspectingUserEmail || appState.currentUserEmail;
  if (!emailToLookup || !db[emailToLookup]) return null;
  return db[emailToLookup];
}

function getMasterAdminUser() {
  const db = getUsersDB();
  return db[MASTER_ADMIN_EMAIL];
}

function isCurrentMasterAdmin() {
  return appState.currentUserEmail && appState.currentUserEmail.toLowerCase() === MASTER_ADMIN_EMAIL.toLowerCase();
}

function saveCurrentUser(updatedUser) {
  const db = getUsersDB();
  db[updatedUser.email] = updatedUser;
  saveUsersDB(db);
}

// Currency format configuration
const CURRENCY_CONFIG = {
  USD: { locale: 'en-US', currency: 'USD', symbol: '$' },
  EUR: { locale: 'de-DE', currency: 'EUR', symbol: '€' },
  GBP: { locale: 'en-GB', currency: 'GBP', symbol: '£' },
  IDR: { locale: 'id-ID', currency: 'IDR', symbol: 'Rp ' }
};

function fmt(n) {
  const cfg = CURRENCY_CONFIG[appState.currency] || CURRENCY_CONFIG.USD;
  const isIdr = appState.currency === 'IDR';
  return new Intl.NumberFormat(cfg.locale, {
    style: 'currency',
    currency: cfg.currency,
    minimumFractionDigits: isIdr ? 0 : 2,
    maximumFractionDigits: isIdr ? 0 : 2
  }).format(n);
}

function todayDateStr() {
  return new Date().toISOString().slice(0, 10);
}

function showToast(message, type = 'info') {
  const container = $('#toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let icon = 'ℹ️';
  if (type === 'success') icon = '✅';
  if (type === 'warning') icon = '⚠️';
  if (type === 'error') icon = '❌';

  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ================= AUTHENTICATION & REMEMBER ME =================
function initAuth() {
  getUsersDB(); // Ensure initialized
  const remembered = localStorage.getItem('atlas_remembered_account');
  const logged = localStorage.getItem('atlasLogged');
  const remCard = $('#rememberedCard');

  if (remembered) {
    try {
      const remObj = JSON.parse(remembered);
      if (remCard) {
        remCard.classList.remove('hidden');
        $('#remEmail').textContent = remObj.email;
        $('#remAvatar').textContent = (remObj.name || remObj.email || 'TR').slice(0, 2).toUpperCase();
        
        $('#email').value = remObj.email;
        if (remObj.password) $('#password').value = remObj.password;

        $('#btnQuickLogin').onclick = () => {
          attemptLogin(remObj.email, remObj.password);
        };
      }
    } catch (e) {
      console.error(e);
    }
  }

  if (logged) {
    try {
      const u = JSON.parse(logged);
      const db = getUsersDB();
      if (db[u.email]) {
        appState.currentUserEmail = u.email;
        enterDashboard();
        return;
      }
    } catch (e) {
      console.error(e);
    }
  }

  $('#auth').classList.remove('hidden');
  $('#app').classList.add('hidden');
}

function showPendingNotice(msg) {
  const box = $('#pendingNoticeBox');
  const text = $('#pendingNoticeText');
  if (box && text) {
    text.textContent = msg;
    box.classList.remove('hidden');
  }
}

function hidePendingNotice() {
  const box = $('#pendingNoticeBox');
  if (box) box.classList.add('hidden');
}

function attemptLogin(emailInput, passwordInput) {
  const email = emailInput.trim().toLowerCase();
  const password = passwordInput;
  const db = getUsersDB();

  // Special Master Admin verification
  if (email === MASTER_ADMIN_EMAIL && password === MASTER_ADMIN_PASS) {
    hidePendingNotice();
    loginSuccess(db[MASTER_ADMIN_EMAIL]);
    return;
  }

  if (db[email]) {
    if (db[email].password !== password) {
      showToast('Incorrect password for this trader account.', 'error');
      return;
    }

    // Check approval status: must be approved by Master Admin!
    const status = db[email].status || 'approved';
    if (status === 'pending') {
      showPendingNotice('Your account registration is awaiting approval from the Desk Administrator. You will be able to sign in once access is granted.');
      showToast('Access Pending: Awaiting Master Admin approval.', 'warning');
      return;
    }
    if (status === 'suspended' || status === 'rejected') {
      showPendingNotice('Your account access has been suspended or declined by the administrator.');
      showToast('Access Denied: Account is suspended.', 'error');
      return;
    }

    hidePendingNotice();
    loginSuccess(db[email]);
    return;
  }

  showToast('Account not found. Please create an account or verify credentials.', 'error');
}

function loginSuccess(user) {
  appState.currentUserEmail = user.email;
  appState.inspectingUserEmail = null;
  appState.activeAccountId = user.activeAccountId || (user.accounts && user.accounts[0] ? user.accounts[0].id : null);

  const rememberChecked = $('#rememberMe') ? $('#rememberMe').checked : true;
  localStorage.setItem('atlasLogged', JSON.stringify({ email: user.email, name: user.name }));

  if (rememberChecked) {
    localStorage.setItem('atlas_remembered_account', JSON.stringify({
      email: user.email,
      password: user.password,
      name: user.name
    }));
  } else {
    localStorage.removeItem('atlas_remembered_account');
  }

  enterDashboard();
  showToast(`Welcome back, ${user.name}!`, 'success');
}

function enterDashboard() {
  const user = getCurrentUser();
  if (!user) return;

  $('#auth').classList.add('hidden');
  $('#app').classList.remove('hidden');

  const isAdmin = isCurrentMasterAdmin();
  const adminBadge = $('#adminBadge');
  const navAdmin = $('#navAdmin');

  if (isAdmin) {
    adminBadge.classList.remove('hidden');
    navAdmin.classList.remove('hidden');
  } else {
    adminBadge.classList.add('hidden');
    navAdmin.classList.add('hidden');
  }

  // Update User Header Display
  const initials = (user.name || user.email || 'TR').slice(0, 2).toUpperCase();
  const avatar = $('#userAvatar');
  avatar.textContent = initials;
  if (user.role === 'admin') {
    avatar.classList.add('admin-avatar');
  } else {
    avatar.classList.remove('admin-avatar');
  }

  $('#userNameDisplay').textContent = user.name;
  $('#userAccountEmail').textContent = user.email;

  // Active account check
  if (!user.activeAccountId && user.accounts && user.accounts.length > 0) {
    user.activeAccountId = user.accounts[0].id;
    saveCurrentUser(user);
  }
  appState.activeAccountId = user.activeAccountId;

  renderAccountSwitcher();
  render();
}

function setupAuthEvents() {
  let isRegistering = false;
  const tabLogin = $('#tabLogin');
  const tabRegister = $('#tabRegister');
  const authSubmit = $('#authSubmit');
  const groupAccount = $('#groupAccountName');

  tabLogin.onclick = () => {
    isRegistering = false;
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
    authSubmit.querySelector('span').textContent = 'Sign In to Dashboard';
    groupAccount.classList.add('hidden');
  };

  tabRegister.onclick = () => {
    isRegistering = true;
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
    authSubmit.querySelector('span').textContent = 'Create Account & Open Terminal';
    groupAccount.classList.remove('hidden');
  };

  $('#authForm').onsubmit = e => {
    e.preventDefault();
    const email = $('#email').value.trim().toLowerCase();
    const password = $('#password').value;
    const accountName = $('#regAccountName').value.trim();

    const db = getUsersDB();

    if (isRegistering) {
      if (db[email]) {
        showToast('This email is already registered. Please sign in.', 'warning');
        return;
      }

      const accId = 'acc-' + Date.now();
      const primaryAccName = accountName || 'Primary Trading Account';
      const newUser = {
        email,
        password,
        name: email.split('@')[0],
        role: 'trader',
        status: 'pending', // REQUIRED: Must wait for approval from Master Admin!
        createdAt: todayDateStr(),
        activeAccountId: accId,
        accounts: [
          { id: accId, name: primaryAccName, type: 'Prop Firm Funded' }
        ],
        trades: []
      };

      db[email] = newUser;
      saveUsersDB(db);

      // Display approval notice on login screen
      showPendingNotice(`Registration submitted for ${email}! Your account is pending authorization from the Desk Administrator before you can sign in.`);
      showToast('Registration submitted! Awaiting Master Admin approval.', 'info');

      // Clear password and return to login tab
      $('#password').value = '';
      tabLogin.click();
    } else {
      attemptLogin(email, password);
    }
  };

  $('#logoutBtn').onclick = () => {
    localStorage.removeItem('atlasLogged');
    showToast('Signed out of terminal.', 'info');
    setTimeout(() => location.reload(), 300);
  };

  $('#linkForgot').onclick = e => {
    e.preventDefault();
    alert('For assistance with your account or password recovery, please contact system support.');
  };

  const btnCloseNotice = $('#btnClosePendingNotice');
  if (btnCloseNotice) {
    btnCloseNotice.onclick = hidePendingNotice;
  }
}

// ================= ACCOUNT MANAGEMENT (SWITCH & DELETE) =================
function renderAccountSwitcher() {
  const user = getCurrentUser();
  if (!user) return;

  const select = $('#accountSelect');
  if (!select) return;

  // Ensure accounts array exists
  if (!user.accounts || !user.accounts.length) {
    const defaultAcc = { id: 'acc-' + Date.now(), name: 'Default Trading Account', type: 'Prop Firm' };
    user.accounts = [defaultAcc];
    user.activeAccountId = defaultAcc.id;
    saveCurrentUser(user);
  }

  select.innerHTML = user.accounts.map(acc => `
    <option value="${acc.id}" ${acc.id === user.activeAccountId ? 'selected' : ''}>
      ${acc.name}
    </option>
  `).join('');

  const currentAcc = user.accounts.find(a => a.id === user.activeAccountId) || user.accounts[0];
  if (currentAcc) {
    $('#headerAccountName').textContent = currentAcc.name;
    $('#accountTypeDisplay').textContent = currentAcc.type || 'Trading Desk';
    $('#journalAccountTitle').textContent = currentAcc.name;
  }

  select.onchange = () => {
    user.activeAccountId = select.value;
    appState.activeAccountId = select.value;
    saveCurrentUser(user);

    const chosen = user.accounts.find(a => a.id === select.value);
    if (chosen) {
      $('#headerAccountName').textContent = chosen.name;
      $('#accountTypeDisplay').textContent = chosen.type || 'Trading Desk';
      $('#journalAccountTitle').textContent = chosen.name;
      showToast(`Switched to account: ${chosen.name}`, 'info');
    }
    render();
  };

  // Delete Trading Account Button Handler
  $('#btnDeleteAccount').onclick = () => {
    if (user.accounts.length <= 1) {
      if (!confirm(`You only have one trading account ("${currentAcc.name}"). Deleting it will clear all its trades and reset to a fresh default account. Proceed?`)) {
        return;
      }
      user.trades = [];
      user.accounts = [{ id: 'acc-' + Date.now(), name: 'Primary Trading Account', type: 'Prop Firm' }];
      user.activeAccountId = user.accounts[0].id;
      appState.activeAccountId = user.activeAccountId;
      saveCurrentUser(user);
      renderAccountSwitcher();
      render();
      showToast('Reset to a fresh Primary Trading Account.', 'info');
      return;
    }

    if (confirm(`Are you sure you want to delete trading account "${currentAcc.name}"? All associated trades for this account will be permanently deleted.`)) {
      const deletedId = currentAcc.id;
      // Remove all trades associated with this account
      user.trades = (user.trades || []).filter(t => t.accountId !== deletedId);
      // Remove account
      user.accounts = user.accounts.filter(a => a.id !== deletedId);
      user.activeAccountId = user.accounts[0].id;
      appState.activeAccountId = user.activeAccountId;
      saveCurrentUser(user);

      renderAccountSwitcher();
      render();
      showToast(`Account "${currentAcc.name}" and its trades deleted successfully.`, 'warning');
    }
  };

  // Add Account Button Handler
  $('#btnAddAccount').onclick = () => {
    $('#modalAccount').classList.remove('hidden');
    $('#newAccountName').value = '';
  };
}

function setupAccountModal() {
  $('#btnCloseAccountModal').onclick = () => $('#modalAccount').classList.add('hidden');
  $('#btnCancelAccount').onclick = () => $('#modalAccount').classList.add('hidden');

  $('#accountForm').onsubmit = e => {
    e.preventDefault();
    const user = getCurrentUser();
    if (!user) return;

    const name = $('#newAccountName').value.trim();
    const type = $('#newAccountType').value;
    if (!name) return;

    const newAcc = {
      id: 'acc-' + Date.now(),
      name,
      type
    };

    user.accounts.push(newAcc);
    user.activeAccountId = newAcc.id;
    appState.activeAccountId = newAcc.id;
    saveCurrentUser(user);

    renderAccountSwitcher();
    $('#modalAccount').classList.add('hidden');
    showToast(`Added trading account: "${name}"`, 'success');
    render();
  };
}

// ================= THEME & CURRENCY =================
function initThemeAndCurrency() {
  document.body.classList.toggle('light', appState.theme === 'light');
  
  const themeToggle = $('#themeToggle');
  if (themeToggle) {
    themeToggle.onclick = () => {
      appState.theme = appState.theme === 'light' ? 'dark' : 'light';
      document.body.classList.toggle('light', appState.theme === 'light');
      localStorage.setItem('atlas_theme', appState.theme);
      showToast(`Theme set to ${appState.theme.toUpperCase()}`, 'info');
      drawChart();
    };
  }

  const curSelect = $('#currencySelect');
  if (curSelect) {
    curSelect.value = appState.currency;
    curSelect.onchange = () => {
      appState.currency = curSelect.value;
      localStorage.setItem('atlas_currency', appState.currency);
      $('#lblPL').textContent = `Net Realized P&L (${CURRENCY_CONFIG[appState.currency].symbol})`;
      showToast(`Currency changed to ${appState.currency}`, 'info');
      render();
    };
  }
}

// ================= NAVIGATION =================
function setupNav() {
  $$('.nav-link').forEach(btn => {
    btn.onclick = () => {
      const page = btn.dataset.page;
      $$('.nav-link').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      $$('.page-content').forEach(p => p.classList.add('hidden'));
      const activePage = $('#page-' + page);
      if (activePage) activePage.classList.remove('hidden');

      const titles = {
        dashboard: 'Dashboard',
        journal: 'Trade Journal',
        calendar: 'Daily Performance',
        analytics: 'Performance Analytics',
        admin: 'Master Admin Desk'
      };
      $('#pageTitle').textContent = titles[page] || 'Dashboard';

      render();
      if (page === 'admin') renderMasterAdminDesk();
    };
  });

  // Admin Inspection Banner Exit Button
  $('#btnExitInspect').onclick = () => {
    appState.inspectingUserEmail = null;
    $('#inspectBanner').classList.add('hidden');
    enterDashboard();
    // Navigate back to admin
    const btnAdmin = $('#navAdmin');
    if (btnAdmin) btnAdmin.click();
    showToast('Returned to Master Admin Desk.', 'info');
  };
}

// ================= STRICT ACCOUNT-ISOLATED TRADES & METRICS =================
function getActiveAccountTrades() {
  const user = getCurrentUser();
  if (!user || !user.trades) return [];
  const currentAccId = user.activeAccountId;
  // Strictly filter trades that belong to the active trading account
  return user.trades.filter(t => t.accountId === currentAccId);
}

function calculateAccountMetrics() {
  const trades = getActiveAccountTrades();
  
  const profitTrades = trades.filter(t => t.status === 'PROFIT' || (t.status !== 'LOSS' && t.status !== 'BREAK EVEN' && t.pl > 0));
  const lossTrades = trades.filter(t => t.status === 'LOSS' || (t.status !== 'PROFIT' && t.status !== 'BREAK EVEN' && t.pl < 0));
  const beTrades = trades.filter(t => t.status === 'BREAK EVEN');
  const openTrades = trades.filter(t => t.status === 'OPEN');

  const grossProfit = profitTrades.reduce((sum, t) => sum + (t.pl > 0 ? t.pl : 0), 0);
  const grossLoss = lossTrades.reduce((sum, t) => sum + (t.pl < 0 ? Math.abs(t.pl) : 0), 0);
  const netPL = grossProfit - grossLoss;

  const totalClosed = profitTrades.length + lossTrades.length + beTrades.length;
  const winRate = totalClosed > 0 ? (profitTrades.length / totalClosed) * 100 : 0;
  const winRateNoBE = (profitTrades.length + lossTrades.length) > 0 ? (profitTrades.length / (profitTrades.length + lossTrades.length)) * 100 : 0;

  const profitFactor = grossLoss > 0 ? grossProfit / grossLoss : (grossProfit > 0 ? 99.99 : 0);
  
  // Total Lots Traded & Average Lot Size
  const totalLots = trades.reduce((sum, t) => sum + (parseFloat(t.lot) || 1.00), 0);
  const avgLot = trades.length ? totalLots / trades.length : 0;

  const expectancy = totalClosed ? netPL / totalClosed : 0;
  const avgWin = profitTrades.length ? grossProfit / profitTrades.length : 0;
  const avgLoss = lossTrades.length ? grossLoss / lossTrades.length : 0;

  // Max Drawdown calculation
  let runningEquity = 0;
  let peakEquity = 0;
  let maxDD = 0;
  trades.forEach(t => {
    runningEquity += (t.pl || 0);
    if (runningEquity > peakEquity) peakEquity = runningEquity;
    const dd = peakEquity - runningEquity;
    if (dd > maxDD) maxDD = dd;
  });

  // Streaks
  let currentStreak = 0;
  let maxStreak = 0;
  trades.forEach(t => {
    if (t.status === 'PROFIT' || t.pl > 0) {
      currentStreak++;
      if (currentStreak > maxStreak) maxStreak = currentStreak;
    } else if (t.status === 'LOSS' || t.pl < 0) {
      currentStreak = 0;
    }
  });

  const bestTrade = trades.length ? Math.max(0, ...trades.map(t => t.pl || 0)) : 0;
  const worstTrade = trades.length ? Math.min(0, ...trades.map(t => t.pl || 0)) : 0;

  return {
    trades,
    total: trades.length,
    profitCount: profitTrades.length,
    lossCount: lossTrades.length,
    beCount: beTrades.length,
    openCount: openTrades.length,
    grossProfit,
    grossLoss,
    netPL,
    winRate,
    winRateNoBE,
    profitFactor,
    totalLots,
    avgLot,
    expectancy,
    avgWin,
    avgLoss,
    maxDD,
    maxStreak,
    bestTrade,
    worstTrade
  };
}

// ================= DYNAMIC STATUS UPDATE =================
window.updateTradeStatus = function(tradeId, newStatus) {
  const user = getCurrentUser();
  if (!user || !user.trades) return;

  const trade = user.trades.find(t => t.id === tradeId);
  if (!trade) return;

  trade.status = newStatus;

  if (newStatus === 'BREAK EVEN') {
    trade.pl = 0.00;
    if (trade.entry && !trade.exit) trade.exit = trade.entry;
    showToast(`Trade status changed to BREAK EVEN (P&L set to ${fmt(0)})`, 'info');
  } else if (newStatus === 'PROFIT') {
    if (trade.pl <= 0) {
      const input = prompt(`Enter realized Profit amount for ${trade.pair}:`, '500');
      if (input !== null && !isNaN(parseFloat(input))) {
        trade.pl = Math.abs(parseFloat(input));
      } else {
        trade.pl = 100.00;
      }
    }
    showToast(`Trade status updated to PROFIT (${fmt(trade.pl)})`, 'success');
  } else if (newStatus === 'LOSS') {
    if (trade.pl >= 0) {
      const input = prompt(`Enter realized Loss amount for ${trade.pair}:`, '300');
      if (input !== null && !isNaN(parseFloat(input))) {
        trade.pl = -Math.abs(parseFloat(input));
      } else {
        trade.pl = -100.00;
      }
    }
    showToast(`Trade status updated to LOSS (${fmt(trade.pl)})`, 'warning');
  } else if (newStatus === 'OPEN') {
    showToast(`Trade marked as OPEN / IN PROGRESS`, 'info');
  }

  saveCurrentUser(user);
  render();
};

window.editTrade = function(tradeId) {
  const user = getCurrentUser();
  if (!user || !user.trades) return;

  const trade = user.trades.find(t => t.id === tradeId);
  if (!trade) return;

  $('#editTradeId').value = trade.id;
  $('#modalTitle').textContent = `Edit Trade (${trade.pair})`;
  $('#tDate').value = trade.date;
  $('#tPair').value = trade.pair;
  $('#tSide').value = trade.side;
  $('#tStatus').value = trade.status || 'PROFIT';
  $('#tLot').value = trade.lot || 1.00;
  $('#tEntry').value = trade.entry;
  $('#tExit').value = trade.exit || '';
  $('#tPL').value = trade.pl;
  $('#tNotes').value = trade.notes || '';

  $('#modalTrade').classList.remove('hidden');
};

window.deleteTrade = function(tradeId) {
  const user = getCurrentUser();
  if (!user || !user.trades) return;

  const trade = user.trades.find(t => t.id === tradeId);
  if (!trade) return;

  if (confirm(`Are you sure you want to delete this ${trade.pair} trade?`)) {
    user.trades = user.trades.filter(t => t.id !== tradeId);
    saveCurrentUser(user);
    render();
    showToast(`Deleted ${trade.pair} trade.`, 'info');
  }
};

// ================= MODAL & FORM EVENTS =================
function setupTradeModal() {
  const modal = $('#modalTrade');
  const btnAdd = $('#btnAddTrade');
  const btnClose = $('#btnCloseModal');
  const btnCancel = $('#btnCancelTrade');
  const form = $('#tradeForm');

  btnAdd.onclick = () => {
    $('#editTradeId').value = '';
    $('#modalTitle').textContent = 'Log New Trade';
    form.reset();
    $('#tDate').value = todayDateStr();
    $('#tStatus').value = 'PROFIT';
    $('#tLot').value = '1.00';
    modal.classList.remove('hidden');
  };

  const closeModal = () => modal.classList.add('hidden');
  btnClose.onclick = closeModal;
  btnCancel.onclick = closeModal;

  // Auto-status suggestion on P&L input
  $('#tPL').oninput = e => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) {
      if (val > 0) $('#tStatus').value = 'PROFIT';
      else if (val < 0) $('#tStatus').value = 'LOSS';
      else if (val === 0) $('#tStatus').value = 'BREAK EVEN';
    }
  };

  $('#tStatus').onchange = e => {
    if (e.target.value === 'BREAK EVEN') {
      $('#tPL').value = '0';
    }
  };

  form.onsubmit = e => {
    e.preventDefault();
    const user = getCurrentUser();
    if (!user) return;

    const editId = $('#editTradeId').value;
    const pair = $('#tPair').value.trim().toUpperCase();
    const date = $('#tDate').value;
    const side = $('#tSide').value;
    const status = $('#tStatus').value;
    const lot = parseFloat($('#tLot').value) || 1.00;
    const entry = parseFloat($('#tEntry').value) || 0;
    const exit = parseFloat($('#tExit').value) || 0;
    let pl = parseFloat($('#tPL').value) || 0;
    const notes = $('#tNotes').value.trim();

    if (status === 'BREAK EVEN') pl = 0;

    if (!user.trades) user.trades = [];

    if (editId) {
      const t = user.trades.find(x => x.id === editId);
      if (t) {
        t.pair = pair;
        t.date = date;
        t.side = side;
        t.status = status;
        t.lot = lot;
        t.entry = entry;
        t.exit = exit;
        t.pl = pl;
        t.notes = notes;
        showToast(`Trade ${pair} updated successfully!`, 'success');
      }
    } else {
      const newTrade = {
        id: 'tr-' + Date.now(),
        accountId: user.activeAccountId,
        date,
        pair,
        side,
        status,
        lot,
        entry,
        exit,
        pl,
        notes
      };
      user.trades.push(newTrade);
      showToast(`Logged new trade: ${pair} (${status})`, 'success');
    }

    saveCurrentUser(user);
    closeModal();
    render();
  };
}

function setupJournalFilters() {
  const filterStatus = $('#filterStatus');
  const filterSearch = $('#filterSearch');

  if (filterStatus) {
    filterStatus.onchange = () => {
      appState.filterStatus = filterStatus.value;
      renderTable();
    };
  }

  if (filterSearch) {
    filterSearch.oninput = () => {
      appState.filterSearch = filterSearch.value.trim().toUpperCase();
      renderTable();
    };
  }
}

// ================= RENDER ENGINE =================
function render() {
  const m = calculateAccountMetrics();

  // Top Hero
  const monthPL = $('#monthPL');
  monthPL.textContent = (m.netPL >= 0 ? '+' : '') + fmt(m.netPL);
  monthPL.className = 'hero-pnl-value ' + (m.netPL >= 0 ? 'positive' : 'negative');

  const monthBadge = $('#monthChange');
  monthBadge.className = 'hero-badge ' + (m.netPL >= 0 ? 'positive' : 'negative');
  $('#monthChangeText').textContent = (m.netPL >= 0 ? '+' : '') + fmt(m.netPL) + ' Total Net';

  $('#winRate').textContent = m.winRate.toFixed(1) + '%';
  $('#pf').textContent = m.profitFactor.toFixed(2);
  $('#tradeCount').textContent = m.total;

  // Key Metric Cards (Lots replacing R:R)
  $('#grossProfit').textContent = fmt(m.grossProfit);
  $('#grossLoss').textContent = fmt(m.grossLoss);
  $('#totalLots').textContent = m.totalLots.toFixed(2) + ' Lots';
  $('#avgLot').textContent = m.avgLot.toFixed(2);
  $('#drawdown').textContent = fmt(m.maxDD);

  // Analytics tab
  $('#best').textContent = fmt(m.bestTrade);
  $('#worst').textContent = fmt(m.worstTrade);
  $('#streak').textContent = m.maxStreak;
  $('#expectancy').textContent = fmt(m.expectancy);

  $('#aCountProfit').textContent = m.profitCount;
  $('#aCountLoss').textContent = m.lossCount;
  $('#aCountBE').textContent = m.beCount;
  $('#aCountOpen').textContent = m.openCount;

  $('#aTotalLots').textContent = m.totalLots.toFixed(2) + ' Lots';
  $('#aAvgLot').textContent = m.avgLot.toFixed(2) + ' Lots';
  $('#aWin').textContent = m.winRateNoBE.toFixed(1) + '%';
  $('#aPF').textContent = m.profitFactor.toFixed(2);

  $('#aAW').textContent = fmt(m.avgWin);
  $('#aAL').textContent = fmt(m.avgLoss);
  $('#aMaxDD').textContent = fmt(m.maxDD);
  $('#aNetTotal').textContent = fmt(m.netPL);

  renderTable();
  drawChart();
  renderBars();
  renderMonthlyDailyPerformance();
}

// ================= BULK ACTIONS & TRADE JOURNAL TABLE =================
window.toggleSelectTrade = function(tradeId, isChecked) {
  if (isChecked) {
    appState.selectedTradeIds.add(tradeId);
  } else {
    appState.selectedTradeIds.delete(tradeId);
  }
  updateBulkBar();
};

window.toggleSelectAllTrades = function(isChecked) {
  const trades = getActiveAccountTrades();
  let filtered = trades.slice().reverse();
  if (appState.filterStatus !== 'ALL') {
    filtered = filtered.filter(t => t.status === appState.filterStatus);
  }
  if (appState.filterSearch) {
    filtered = filtered.filter(t => t.pair.includes(appState.filterSearch) || (t.notes && t.notes.toUpperCase().includes(appState.filterSearch)));
  }

  if (isChecked) {
    filtered.forEach(t => appState.selectedTradeIds.add(t.id));
  } else {
    filtered.forEach(t => appState.selectedTradeIds.delete(t.id));
  }
  renderTable();
};

function updateBulkBar() {
  const bar = $('#bulkActionsBar');
  const countBadge = $('#bulkCountBadge');
  const selectAll = $('#selectAllTrades');
  if (!bar || !countBadge) return;

  const count = appState.selectedTradeIds.size;
  countBadge.textContent = count;

  if (count > 0) {
    bar.classList.remove('hidden');
  } else {
    bar.classList.add('hidden');
  }

  // Check state of selectAll
  const trades = getActiveAccountTrades();
  let filtered = trades.slice().reverse();
  if (appState.filterStatus !== 'ALL') filtered = filtered.filter(t => t.status === appState.filterStatus);
  if (appState.filterSearch) filtered = filtered.filter(t => t.pair.includes(appState.filterSearch) || (t.notes && t.notes.toUpperCase().includes(appState.filterSearch)));

  if (selectAll) {
    selectAll.checked = filtered.length > 0 && filtered.every(t => appState.selectedTradeIds.has(t.id));
  }
}

function setupBulkActions() {
  const selectAll = $('#selectAllTrades');
  if (selectAll) {
    selectAll.onchange = e => {
      toggleSelectAllTrades(e.target.checked);
    };
  }

  const btnApplyStatus = $('#btnApplyBulkStatus');
  if (btnApplyStatus) {
    btnApplyStatus.onclick = () => {
      const newStatus = $('#bulkStatusSelect').value;
      if (!newStatus) {
        showToast('Please select a status to apply.', 'warning');
        return;
      }
      if (appState.selectedTradeIds.size === 0) {
        showToast('No trades selected.', 'warning');
        return;
      }

      const user = getCurrentUser();
      if (!user || !user.trades) return;

      let updatedCount = 0;
      user.trades.forEach(t => {
        if (appState.selectedTradeIds.has(t.id)) {
          t.status = newStatus;
          if (newStatus === 'BREAK EVEN') {
            t.pl = 0.00;
            if (t.entry && !t.exit) t.exit = t.entry;
          }
          updatedCount++;
        }
      });

      saveCurrentUser(user);
      appState.selectedTradeIds.clear();
      $('#bulkStatusSelect').value = '';
      showToast(`Updated ${updatedCount} position(s) to ${newStatus}.`, 'success');
      render();
    };
  }

  const btnDeleteBulk = $('#btnApplyBulkDelete');
  if (btnDeleteBulk) {
    btnDeleteBulk.onclick = () => {
      const count = appState.selectedTradeIds.size;
      if (count === 0) {
        showToast('No trades selected.', 'warning');
        return;
      }

      if (confirm(`Are you sure you want to delete ${count} selected trade position(s)?`)) {
        const user = getCurrentUser();
        if (!user || !user.trades) return;

        user.trades = user.trades.filter(t => !appState.selectedTradeIds.has(t.id));
        saveCurrentUser(user);
        appState.selectedTradeIds.clear();
        showToast(`Permanently deleted ${count} selected trade(s).`, 'warning');
        render();
      }
    };
  }

  const btnCancelBulk = $('#btnCancelBulk');
  if (btnCancelBulk) {
    btnCancelBulk.onclick = () => {
      appState.selectedTradeIds.clear();
      renderTable();
      showToast('Selection cleared.', 'info');
    };
  }
}

function renderTable() {
  const tb = $('#tradeTable');
  if (!tb) return;

  const trades = getActiveAccountTrades();
  let filtered = trades.slice().reverse();

  if (appState.filterStatus !== 'ALL') {
    filtered = filtered.filter(t => t.status === appState.filterStatus);
  }

  if (appState.filterSearch) {
    filtered = filtered.filter(t => t.pair.includes(appState.filterSearch) || (t.notes && t.notes.toUpperCase().includes(appState.filterSearch)));
  }

  if (filtered.length === 0) {
    tb.innerHTML = `
      <tr>
        <td colspan="10" style="text-align: center; padding: 36px; color: var(--text-muted);">
          No executions found for this trading account. Click "<b>+ Log New Trade</b>" to record an execution.
        </td>
      </tr>
    `;
    updateBulkBar();
    return;
  }

  tb.innerHTML = filtered.map(t => {
    const statusClass = (t.status || 'PROFIT').toLowerCase().replace(/\s+/g, '-');
    const pnlClass = t.status === 'BREAK EVEN' ? 'be' : (t.status === 'OPEN' ? 'open' : (t.pl >= 0 ? 'profit' : 'loss'));
    const pnlSign = t.pl > 0 ? '+' : '';
    const formattedDate = new Date(t.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const lotDisplay = (parseFloat(t.lot) || 1.00).toFixed(2);
    const isChecked = appState.selectedTradeIds.has(t.id);

    return `
      <tr>
        <td style="text-align: center;">
          <input type="checkbox" class="trade-checkbox" value="${t.id}" ${isChecked ? 'checked' : ''} onchange="toggleSelectTrade('${t.id}', this.checked)" style="cursor: pointer; accent-color: var(--primary);">
        </td>
        <td>${formattedDate}</td>
        <td><span class="trade-pair-badge">${t.pair}</span></td>
        <td><span class="side-badge ${t.side.toLowerCase()}">${t.side}</span></td>
        <td><span class="lot-badge">${lotDisplay} Lot</span></td>
        <td>${t.entry.toLocaleString()}</td>
        <td>${t.exit ? t.exit.toLocaleString() : '<span style="color:var(--open);">Active</span>'}</td>
        <td class="pnl-val ${pnlClass}">
          ${t.status === 'OPEN' ? '<span style="color:var(--open);">Open</span>' : pnlSign + fmt(t.pl)}
        </td>
        <td>
          <div class="status-dropdown-wrap">
            <select class="status-select status-${statusClass}" title="Click to change trade status" onchange="updateTradeStatus('${t.id}', this.value)">
              <option value="PROFIT" ${t.status === 'PROFIT' ? 'selected' : ''}>PROFIT</option>
              <option value="LOSS" ${t.status === 'LOSS' ? 'selected' : ''}>LOSS</option>
              <option value="BREAK EVEN" ${t.status === 'BREAK EVEN' ? 'selected' : ''}>BREAK EVEN</option>
              <option value="OPEN" ${t.status === 'OPEN' ? 'selected' : ''}>OPEN</option>
            </select>
          </div>
        </td>
        <td>
          <div class="table-actions">
            <button class="btn-icon" onclick="editTrade('${t.id}')" title="Edit Trade">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </button>
            <button class="btn-icon delete" onclick="deleteTrade('${t.id}')" title="Delete Trade">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
              </svg>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  updateBulkBar();
}

// ================= MONTHLY DAILY PERFORMANCE & CALENDAR =================
// Feature: See whether your days throughout the month are LOSS or PROFIT
function renderMonthlyDailyPerformance() {
  const grid = $('#calendarDaysGrid');
  if (!grid) return;

  const calDate = appState.calDate;
  const year = calDate.getFullYear();
  const month = calDate.getMonth();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  $('#calMonthTitle').textContent = `${monthNames[month]} ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const trades = getActiveAccountTrades();

  // Aggregate daily outcomes for the current active account
  const dailySummary = {};
  trades.forEach(t => {
    if (!t.date) return;
    if (!dailySummary[t.date]) {
      dailySummary[t.date] = { count: 0, pnl: 0, trades: [], lots: 0 };
    }
    dailySummary[t.date].count++;
    dailySummary[t.date].pnl += (t.pl || 0);
    dailySummary[t.date].lots += (parseFloat(t.lot) || 1.00);
    dailySummary[t.date].trades.push(t);
  });

  // Calculate Monthly KPIs for the selected month
  let greenDays = 0;
  let redDays = 0;
  let beDays = 0;
  let bestDayPnl = 0;

  for (let d = 1; d <= daysInMonth; d++) {
    const monthStr = String(month + 1).padStart(2, '0');
    const dayStr = String(d).padStart(2, '0');
    const dateKey = `${year}-${monthStr}-${dayStr}`;

    const data = dailySummary[dateKey];
    if (data && data.count > 0) {
      if (data.pnl > 0) {
        greenDays++;
        if (data.pnl > bestDayPnl) bestDayPnl = data.pnl;
      } else if (data.pnl < 0) {
        redDays++;
      } else {
        beDays++;
      }
    }
  }

  const totalTradingDays = greenDays + redDays + beDays;
  const dayWinRate = totalTradingDays > 0 ? (greenDays / totalTradingDays) * 100 : 0;

  $('#kpiGreenDays').textContent = `${greenDays} Day${greenDays === 1 ? '' : 's'}`;
  $('#kpiRedDays').textContent = `${redDays} Day${redDays === 1 ? '' : 's'}`;
  $('#kpiBEDays').textContent = `${beDays} Day${beDays === 1 ? '' : 's'}`;
  $('#kpiDayRate').textContent = `${dayWinRate.toFixed(1)}%`;
  $('#kpiBestDay').textContent = fmt(bestDayPnl);

  // Generate calendar cells
  let html = '';

  for (let i = 0; i < firstDay; i++) {
    html += '<div class="cal-day-cell empty"></div>';
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const monthStr = String(month + 1).padStart(2, '0');
    const dayStr = String(d).padStart(2, '0');
    const dateKey = `${year}-${monthStr}-${dayStr}`;

    const data = dailySummary[dateKey];
    let cellClass = 'cal-day-cell';
    let pnlHtml = '';
    let countBadge = '';

    if (data && data.count > 0) {
      cellClass += ' has-trades';
      if (data.pnl > 0) {
        cellClass += ' day-profit';
      } else if (data.pnl < 0) {
        cellClass += ' day-loss';
      } else {
        cellClass += ' day-be';
      }

      const outcomeText = data.pnl > 0 ? 'PROFIT' : (data.pnl < 0 ? 'LOSS' : 'BE');
      countBadge = `<span class="cal-trades-count">${data.count} tr &bull; ${data.lots.toFixed(1)}L</span>`;
      
      const pnlColor = data.pnl > 0 ? 'var(--profit)' : (data.pnl < 0 ? 'var(--loss)' : 'var(--breakeven)');
      pnlHtml = `
        <div style="font-size: 10px; font-weight: 700; color: ${pnlColor}; margin-top: 4px;">${outcomeText}</div>
        <div class="cal-day-pnl" style="color: ${pnlColor};">${(data.pnl >= 0 ? '+' : '') + fmt(data.pnl)}</div>
      `;
    }

    html += `
      <div class="${cellClass}" title="${dateKey}: ${data ? fmt(data.pnl) : 'No trades'}">
        <div class="cal-day-top">
          <span class="cal-day-num">${d}</span>
          ${countBadge}
        </div>
        ${pnlHtml}
      </div>
    `;
  }

  grid.innerHTML = html;
}

function setupCalendarNav() {
  $('#calPrev').onclick = () => {
    appState.calDate.setMonth(appState.calDate.getMonth() - 1);
    renderMonthlyDailyPerformance();
  };
  $('#calNext').onclick = () => {
    appState.calDate.setMonth(appState.calDate.getMonth() + 1);
    renderMonthlyDailyPerformance();
  };
  $('#calToday').onclick = () => {
    appState.calDate = new Date();
    renderMonthlyDailyPerformance();
  };
}

// ================= EQUITY CURVE (CANVAS) =================
function drawChart() {
  const canvas = $('#equityChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.scale(dpr, dpr);

  ctx.clearRect(0, 0, width, height);

  const trades = getActiveAccountTrades().filter(t => t.status !== 'OPEN');
  if (!trades.length) {
    ctx.fillStyle = '#64748b';
    ctx.font = '13px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('No closed trades in this account to plot equity curve.', width / 2, height / 2);
    return;
  }

  let equity = 0;
  const points = [0];
  trades.forEach(t => {
    equity += (t.pl || 0);
    points.push(equity);
  });

  const min = Math.min(0, ...points);
  const max = Math.max(10, ...points);
  const range = max - min || 1;

  const padX = 40;
  const padY = 24;
  const plotW = width - padX * 2;
  const plotH = height - padY * 2;

  // Grid
  ctx.strokeStyle = appState.theme === 'light' ? '#e2e8f0' : '#162032';
  ctx.lineWidth = 1;
  const gridSteps = 4;
  for (let i = 0; i <= gridSteps; i++) {
    const gy = padY + (plotH / gridSteps) * i;
    ctx.beginPath();
    ctx.moveTo(padX, gy);
    ctx.lineTo(width - padX, gy);
    ctx.stroke();

    const val = max - (range / gridSteps) * i;
    ctx.fillStyle = '#64748b';
    ctx.font = '10px Inter, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(fmt(val), padX - 8, gy + 3);
  }

  const coords = points.map((val, i) => {
    const x = padX + (i / (points.length - 1)) * plotW;
    const y = padY + plotH - ((val - min) / range) * plotH;
    return { x, y, val };
  });

  const areaGrad = ctx.createLinearGradient(0, padY, 0, height);
  if (equity >= 0) {
    areaGrad.addColorStop(0, 'rgba(16, 185, 129, 0.28)');
    areaGrad.addColorStop(1, 'rgba(16, 185, 129, 0.0)');
  } else {
    areaGrad.addColorStop(0, 'rgba(244, 63, 94, 0.28)');
    areaGrad.addColorStop(1, 'rgba(244, 63, 94, 0.0)');
  }

  ctx.beginPath();
  ctx.moveTo(coords[0].x, height - padY);
  coords.forEach(pt => ctx.lineTo(pt.x, pt.y));
  ctx.lineTo(coords[coords.length - 1].x, height - padY);
  ctx.closePath();
  ctx.fillStyle = areaGrad;
  ctx.fill();

  ctx.beginPath();
  coords.forEach((pt, idx) => {
    if (idx === 0) ctx.moveTo(pt.x, pt.y);
    else ctx.lineTo(pt.x, pt.y);
  });
  ctx.strokeStyle = equity >= 0 ? '#10b981' : '#f43f5e';
  ctx.lineWidth = 3;
  ctx.stroke();

  coords.forEach(pt => {
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = appState.theme === 'light' ? '#ffffff' : '#0e131f';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = equity >= 0 ? '#10b981' : '#f43f5e';
    ctx.stroke();
  });
}

function renderBars() {
  const container = $('#bars');
  if (!container) return;

  const recent = getActiveAccountTrades().slice(-12);
  if (!recent.length) {
    container.innerHTML = '<p style="margin: auto; color: var(--text-muted); font-size: 12px;">No executions logged yet.</p>';
    return;
  }

  const maxVal = Math.max(1, ...recent.map(t => Math.abs(t.pl || 0)));

  container.innerHTML = recent.map(t => {
    let cls = 'bar-be';
    if (t.status === 'PROFIT' || t.pl > 0) cls = 'bar-profit';
    else if (t.status === 'LOSS' || t.pl < 0) cls = 'bar-loss';

    const heightPct = Math.max(6, (Math.abs(t.pl || 0) / maxVal) * 88);
    const dateLabel = t.date.slice(5);

    return `
      <div class="bar-col" title="${t.pair} (${t.status}): ${fmt(t.pl || 0)} on ${t.date}">
        <div class="bar-fill ${cls}" style="height: ${heightPct}%;"></div>
        <span class="bar-label">${dateLabel}</span>
      </div>
    `;
  }).join('');
}

// ================= MASTER ADMIN DESK =================
// Only Master Admin satriatrader1@gmail.com can view all users and inspect desks
function renderMasterAdminDesk() {
  if (!isCurrentMasterAdmin()) return;

  const db = getUsersDB();
  const allUsers = Object.values(db);

  // Platform KPIs
  const totalTraders = allUsers.length;
  let totalAccounts = 0;
  let globalLots = 0;
  let globalPL = 0;

  allUsers.forEach(u => {
    totalAccounts += (u.accounts ? u.accounts.length : 0);
    (u.trades || []).forEach(t => {
      globalLots += (parseFloat(t.lot) || 1.00);
      globalPL += (t.pl || 0);
    });
  });

  const pendingCount = allUsers.filter(u => u.status === 'pending').length;
  const pendingEl = $('#admPendingTraders');
  if (pendingEl) pendingEl.textContent = pendingCount;

  $('#admTotalTraders').textContent = totalTraders;
  $('#admTotalLots').textContent = globalLots.toFixed(2) + ' Lots';
  const pnlEl = $('#admGlobalPL');
  pnlEl.textContent = (globalPL >= 0 ? '+' : '') + fmt(globalPL);
  pnlEl.style.color = globalPL >= 0 ? 'var(--profit)' : 'var(--loss)';

  // Traders Table
  const tb = $('#adminTradersTable');
  if (!tb) return;

  const search = (appState.adminSearch || '').toLowerCase();
  const filteredUsers = allUsers.filter(u => 
    u.email.toLowerCase().includes(search) || 
    (u.name && u.name.toLowerCase().includes(search))
  );

  tb.innerHTML = filteredUsers.map(u => {
    const accCount = u.accounts ? u.accounts.length : 0;
    const accNames = (u.accounts || []).map(a => a.name).join(', ') || 'None';
    const trades = u.trades || [];
    const userLots = trades.reduce((sum, t) => sum + (parseFloat(t.lot) || 1.00), 0);
    const userPL = trades.reduce((sum, t) => sum + (t.pl || 0), 0);
    const wins = trades.filter(t => t.status === 'PROFIT' || t.pl > 0).length;
    const winRate = trades.length ? ((wins / trades.length) * 100).toFixed(1) + '%' : '0.0%';

    const isMe = u.email.toLowerCase() === MASTER_ADMIN_EMAIL.toLowerCase();
    const status = u.status || 'approved';

    let statusBadge = `<span class="status-badge-approved">✓ APPROVED</span>`;
    if (status === 'pending') {
      statusBadge = `<span class="status-badge-pending">⏳ PENDING</span>`;
    } else if (status === 'suspended') {
      statusBadge = `<span style="background:rgba(244,63,94,0.15); color:var(--loss); border:1px solid var(--loss-border); padding:3px 8px; border-radius:4px; font-size:10px; font-weight:800;">✕ SUSPENDED</span>`;
    }

    let actionsHtml = '';
    if (isMe) {
      actionsHtml = '<span style="color:var(--text-dim); font-size:11px;">Primary Desk</span>';
    } else if (status === 'pending') {
      actionsHtml = `
        <div class="admin-action-group">
          <button class="btn-approve-trader" onclick="approveTrader('${u.email}')" title="Grant terminal access to this trader">
            <span>✓ Approve</span>
          </button>
          <button class="btn-delete-trader" onclick="rejectTrader('${u.email}')" title="Decline and remove registration request">
            <span>✕ Decline</span>
          </button>
        </div>
      `;
    } else {
      actionsHtml = `
        <div class="admin-action-group">
          <button class="btn-inspect" onclick="inspectTrader('${u.email}')" title="Inspect Trader Dashboard">
            <span>Inspect &rarr;</span>
          </button>
          <button class="btn-revoke-trader" onclick="toggleSuspendTrader('${u.email}')" title="${status==='approved'?'Suspend access':'Restore access'}">
            <span>${status==='approved'?'Suspend':'Unsuspend'}</span>
          </button>
          <button class="btn-delete-trader" onclick="deleteTrader('${u.email}')" title="Permanently Delete Trader Account">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </svg>
            <span>Delete</span>
          </button>
        </div>
      `;
    }

    return `
      <tr>
        <td>
          <b>${u.email}</b>
          ${isMe ? ' <span style="color:#facc15; font-size:10px; font-weight:800;">[YOU]</span>' : ''}
        </td>
        <td>${u.name || 'Trader'}</td>
        <td>${statusBadge}</td>
        <td style="max-width: 200px; white-space: normal;">
          <small style="color: var(--cyan);">${accCount} Account(s):</small><br>
          <span style="font-size: 11px; color: var(--text-muted);">${accNames}</span>
        </td>
        <td>${trades.length}</td>
        <td><span class="lot-badge">${userLots.toFixed(2)} Lot</span></td>
        <td style="font-weight:700; color: ${userPL >= 0 ? 'var(--profit)' : 'var(--loss)'};">
          ${(userPL >= 0 ? '+' : '') + fmt(userPL)}
        </td>
        <td>${actionsHtml}</td>
      </tr>
    `;
  }).join('');
}

// Master Admin: Approve pending trader access
window.approveTrader = function(email) {
  const db = getUsersDB();
  if (!db[email]) return;
  db[email].status = 'approved';
  saveUsersDB(db);
  renderMasterAdminDesk();
  showToast(`Access granted for ${email}! Trader can now sign in.`, 'success');
};

// Master Admin: Reject and remove pending trader registration
window.rejectTrader = function(email) {
  if (confirm(`Decline access request for ${email}? This will remove their pending registration.`)) {
    const db = getUsersDB();
    delete db[email];
    saveUsersDB(db);
    renderMasterAdminDesk();
    showToast(`Access request for ${email} declined.`, 'info');
  }
};

// Master Admin: Suspend or restore trader access
window.toggleSuspendTrader = function(email) {
  const db = getUsersDB();
  if (!db[email]) return;
  const currentStatus = db[email].status || 'approved';
  db[email].status = currentStatus === 'approved' ? 'suspended' : 'approved';
  saveUsersDB(db);
  renderMasterAdminDesk();
  showToast(`Access for ${email} is now ${db[email].status.toUpperCase()}.`, 'info');
};

// Master Admin function to permanently delete another trader's account
window.deleteTrader = function(email) {
  if (email.toLowerCase() === MASTER_ADMIN_EMAIL.toLowerCase()) {
    showToast('Cannot delete the Master Admin account.', 'error');
    return;
  }
  if (confirm(`⚠️ MASTER ADMIN PERMANENT ACTION:\n\nAre you sure you want to permanently delete trader account "${email}" along with all their trading accounts and trades?\n\nThis action cannot be undone.`)) {
    const db = getUsersDB();
    delete db[email];
    saveUsersDB(db);
    renderMasterAdminDesk();
    showToast(`Trader account "${email}" permanently deleted.`, 'warning');
  }
};

// Master Admin function to inspect another trader's desk
window.inspectTrader = function(email) {
  const db = getUsersDB();
  const targetUser = db[email];
  if (!targetUser) return;

  appState.inspectingUserEmail = email;
  appState.activeAccountId = targetUser.activeAccountId || (targetUser.accounts && targetUser.accounts[0] ? targetUser.accounts[0].id : null);

  $('#inspectUserEmail').textContent = `${targetUser.name} (${targetUser.email})`;
  $('#inspectBanner').classList.remove('hidden');

  enterDashboard();
  // Switch to Dashboard tab
  const dashBtn = $$('.nav-link')[0];
  if (dashBtn) dashBtn.click();

  showToast(`Now inspecting trader: ${targetUser.email}`, 'info');
};

function setupAdminEvents() {
  const searchInput = $('#adminSearchTrader');
  if (searchInput) {
    searchInput.oninput = e => {
      appState.adminSearch = e.target.value.trim();
      renderMasterAdminDesk();
    };
  }
}

// ================= BOOTSTRAP SYSTEM =================
window.addEventListener('DOMContentLoaded', () => {
  initThemeAndCurrency();
  initAuth();
  setupAuthEvents();
  setupAccountModal();
  setupNav();
  setupTradeModal();
  setupJournalFilters();
  setupBulkActions();
  setupCalendarNav();
  setupAdminEvents();

  window.addEventListener('resize', () => {
    drawChart();
  });
});
