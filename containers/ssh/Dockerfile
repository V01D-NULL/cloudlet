# Use Alpine as the base image
FROM alpine:latest

# Install OpenSSH server
RUN apk --no-cache add openssh

# Generate host keys
RUN ssh-keygen -A

# Set up a user and password for SSH access (user: "root", password: "root")
RUN echo "root:root" | chpasswd

RUN echo "PermitRootLogin yes" >> /etc/ssh/sshd_config
RUN echo "PasswordAuthentication yes" >> /etc/ssh/sshd_config

# Expose SSH port
EXPOSE 22

# Run SSH server
CMD ["/usr/sbin/sshd", "-D"]
