// sales-fusion login api test
export async function Login(userId, password) {
  console.log("userId api:", userId);
  console.log("password api:", password);

  try {
    const response = await fetch(
      "http://192.168.162.249:3000/v1/auth/tenant/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone_number: userId, password: password }),
      }
    );

    if (!response.ok) {
      // You can also capture response text for debugging
      const errorText = await response.text();
      throw new Error(`Login failed: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}
