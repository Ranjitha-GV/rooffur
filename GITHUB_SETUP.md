# Steps to Upload Your Project to GitHub

## Prerequisites
- Git installed on your computer (download from https://git-scm.com/download/win)
- GitHub account created (sign up at https://github.com)

## Step-by-Step Instructions

### 1. Create a GitHub Repository
1. Go to https://github.com and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `my-first-react-app`)
5. **DO NOT** check "Initialize this repository with a README"
6. Click "Create repository"

### 2. Initialize Git in Your Project
Open your terminal in the project directory and run:

```bash
# Initialize git repository
git init

# Add all files to staging
git add .

# Create your first commit
git commit -m "Initial commit: Pet Shop homepage"

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### 3. Important Notes
- Replace `YOUR_USERNAME` with your actual GitHub username
- Replace `REPO_NAME` with your actual repository name
- You'll be prompted for your GitHub username and password/token when pushing
- If you use two-factor authentication, you'll need to use a Personal Access Token instead of your password

### 4. Alternative: Using GitHub Desktop
If you prefer a GUI:
1. Download GitHub Desktop from https://desktop.github.com/
2. Sign in with your GitHub account
3. Click "File" → "Add Local Repository"
4. Select your project folder
5. Click "Publish repository" to upload to GitHub


