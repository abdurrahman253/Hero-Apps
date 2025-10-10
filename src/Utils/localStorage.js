const INSTALLED_KEY = "installedApps";

export const getInstalledApps = () => {
  const apps = localStorage.getItem(INSTALLED_KEY);
  return apps ? JSON.parse(apps) : [];
};

export const saveInstalledApp = (app) => {
  const apps = getInstalledApps();
  if (!apps.some(a => a.id === app.id)) {
    apps.push(app);
    localStorage.setItem(INSTALLED_KEY, JSON.stringify(apps));
  }
};

export const removeInstalledApp = (appId) => {
  const apps = getInstalledApps().filter(a => a.id !== appId);
  localStorage.setItem(INSTALLED_KEY, JSON.stringify(apps));
};
